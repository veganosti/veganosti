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
import ListIcon from 'material-ui-icons/List';
import BackIcon from 'material-ui-icons/KeyboardBackspace';
import MenuIcon from 'material-ui-icons/Menu';
import InfoIcon from 'material-ui-icons/InfoOutline';
import EmailIcon from 'material-ui-icons/Email';

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
  }

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
        <Drawer open={this.state.drawerOpen} onRequestClose={() => this.toggleDrawer(false)}>
          <div>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Sobre Veganosti" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="Contacto" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemText primary="Euskera" />
              </ListItem>
              <ListItem button component="a" href="#simple-list">
                <ListItemText primary="Castellano" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Inglés" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <div>
                  <Typography style={{marginBottom: 5}}>Agradecimientos:</Typography>
                  <img style={{width: 150}} src="http://askekintza.org/wp-content/themes/Askekintza/imagenes/logo.png" alt="Askekintza" />
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
