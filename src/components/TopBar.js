import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MapIcon from 'material-ui-icons/Map';
import ListIcon from 'material-ui-icons/List';

const styles = () => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  }
});

function TopBar({classes}) {
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            Veganosti
          </Typography>
          <IconButton color="contrast" component={Link} to="/">
            <MapIcon/>
          </IconButton>
          <IconButton color="contrast" component={Link} to="/places">
            <ListIcon/>
          </IconButton>
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
};

export default withStyles(styles)(TopBar);
