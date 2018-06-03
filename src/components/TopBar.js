import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, matchPath } from 'react-router'
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MapIcon from 'material-ui-icons/Map';
import HomeIcon from 'material-ui-icons/Home';
import ListIcon from 'material-ui-icons/List';
import BackIcon from 'material-ui-icons/KeyboardBackspace';
import MenuIcon from 'material-ui-icons/Menu';
import InfoIcon from 'material-ui-icons/InfoOutline';

const styles = () => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class TopBar extends Component {

  state = {
    drawerOpen: false
  };

  toggleDrawer = (open) => {
    this.setState({
      drawerOpen: open,
    });
  };

  render() {
    const {classes, location, history} = this.props;
    const isDetailPage = matchPath(location.pathname, {
      path: '/places/:id',
      exact: true,
    });

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            {isDetailPage ? (
              <IconButton color="contrast" onClick={history.goBack}>
                <BackIcon/>
              </IconButton>
            ) : (
              <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" onClick={() =>this.toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            )}
            {!isDetailPage && (
              <Typography type="title" color="inherit" className={classes.flex}>
                <b style={{fontSize: 27}}>Vegan</b>osti
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
        <Drawer open={this.state.drawerOpen} onRequestClose={() => this.toggleDrawer(false)}>
          <div tabIndex={0}
               role="button"
               onClick={() => this.toggleDrawer(false)}
               onKeyDown={() => this.toggleDrawer(false)}>
            <List>
              <ListItem button component={Link} to="/">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Inicio" />
              </ListItem>
              <ListItem button component={Link} to="/about">
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Sobre Veganosti" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button component={Link} to="/askekintza">
                <div>
                  <Typography style={{marginBottom: 5}}>Agradecimientos:</Typography>
                  <img style={{width: 150}} src="/img/askekintza.png" alt="Askekintza" />
                </div>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
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
