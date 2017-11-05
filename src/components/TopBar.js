import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router'
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MapIcon from 'material-ui-icons/Map';
import ListIcon from 'material-ui-icons/List';
import BackIcon from 'material-ui-icons/KeyboardBackspace';

const styles = () => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  }
});

function TopBar({classes, location, history}) {

  const isDetailPage = matchPath(location.pathname, {
    path: '/places/:id',
    exact: true,
  })

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          {isDetailPage ? (
            <IconButton color="contrast" onClick={history.goBack}>
              <BackIcon/>
            </IconButton>
          ) : (
            <Typography type="title" color="inherit" className={classes.flex}>
              Veganosti
            </Typography>
          )}
          {location.pathname === '/places' && (
            <IconButton color="contrast" component={Link} to="/">
              <MapIcon/>
            </IconButton>
          )}
          {location.pathname === '/' && (
            <IconButton color="contrast" component={Link} to="/places">
              <ListIcon/>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    flex: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired
};

export default withStyles(styles)(withRouter(TopBar));
