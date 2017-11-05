import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import Paper from 'material-ui/Paper'
import { connect } from 'react-redux'
import { setPlaceTypeFilter } from '../redux/actions/places'

const placeFilterStyle = {
  position: 'fixed',
  top: 120,
  right: 0,
  zIndex: 11,
  background: '#FFFFFF'
}

const styles = () => ({

});

class PlaceFilter extends Component {

  handleToggle = value => () => {
    const placeTypeFilter = this.props.placeTypeFilter.concat();
    const index = placeTypeFilter.indexOf(value);
    if (index !== -1) {
      placeTypeFilter.splice(index, 1);
    } else {
      placeTypeFilter.push(value);
    }
    this.props.setPlaceTypeFilter(placeTypeFilter)
  };

  render () {
    const classes = this.props;

    return (
      <Paper style={placeFilterStyle}>
        <List>
          <ListItem
            dense
            button
            className={classes.listItem}
            onClick={this.handleToggle('Vegano')}
          >
            <Checkbox
              checked={this.props.placeTypeFilter.indexOf('Vegano') !== -1}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary="Veganos" />
          </ListItem>
          <ListItem
            dense
            button
            className={classes.listItem}
            onClick={this.handleToggle('Vegetariano')}
          >
            <Checkbox
              checked={this.props.placeTypeFilter.indexOf('Vegetariano') !== -1}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary="Vegetarianos" />
          </ListItem>
          <ListItem
            dense
            button
            className={classes.listItem}
            onClick={this.handleToggle('Opciones veganas')}
          >
            <Checkbox
              checked={this.props.placeTypeFilter.indexOf('Opciones veganas') !== -1}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary="Opciones veganas" />
          </ListItem>
          <ListItem
            dense
            button
            className={classes.listItem}
            onClick={this.handleToggle('Tiendas y obradores')}
          >
            <Checkbox
              checked={this.props.placeTypeFilter.indexOf('Tiendas y obradores') !== -1}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary="Tiendas y obradores" />
          </ListItem>
        </List>
      </Paper>
    )
  }
}

PlaceFilter.propTypes = {
  placeTypeFilter: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  setPlaceTypeFilter: PropTypes.func.isRequired,
}

function mapStateToProps (state) {
  return {
    placeTypeFilter: state.placeTypeFilter,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setPlaceTypeFilter: (placeTypeFilter) => dispatch(setPlaceTypeFilter(placeTypeFilter)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PlaceFilter))
