import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import Button from 'material-ui/Button';
import Collapse from 'material-ui/transitions/Collapse';
import SettingsIcon from 'material-ui-icons/Settings';
import Map from './Map'
import PlaceFilter from './PlaceFilter'

const styles = () => ({
  filterButton: {
    position: 'fixed',
    right: 0,
    zIndex: 10,
  }
})

class MapPage extends Component
{
  state = {
    filterVisible: false
  }

  onFilterButtonClicked = () => this.setState({
    ...this.state,
    filterVisible: !this.state.filterVisible
  });

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button fab color="primary" aria-label="add" className={classes.filterButton} onClick={this.onFilterButtonClicked}>
          <SettingsIcon/>
        </Button>
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=geometry,drawing,places`}
          containerElement={<div id="map" style={{height: `93vh`}}/>}
          loadingElement={<div style={{height: `100%`}}/>}
          mapElement={<div style={{height: `100%`}}/>}
        />
        <Collapse in={this.state.filterVisible} transitionDuration="auto" unmountOnExit>
          <PlaceFilter/>
        </Collapse>
      </div>
    )
  }
}

MapPage.propTypes = {
  classes: PropTypes.shape().isRequired,
}

export default withStyles(styles)(MapPage);
