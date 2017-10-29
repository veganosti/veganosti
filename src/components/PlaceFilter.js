import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Segment, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setPlaceTypeFilter } from '../redux/actions/places'

class PlaceFilter extends Component {

  onChange = (e, { name }) => {
    const placeTypeFilter = this.props.placeTypeFilter.concat();
    const index = placeTypeFilter.indexOf(name);
    if (index !== -1) {
      placeTypeFilter.splice(index, 1);
    } else {
      placeTypeFilter.push(name);
    }
    this.props.setPlaceTypeFilter(placeTypeFilter)
  };

  render () {
    return (
      <Segment raised id="place_filter">
        <Form>
          <Form.Checkbox
            label="Veganos"
            name="Vegano"
            onChange={this.onChange}
            checked={this.props.placeTypeFilter.indexOf('Vegano') !== -1} />
          <Form.Checkbox
            label="Vegetarianos"
            name="Vegetariano"
            onChange={this.onChange}
            checked={this.props.placeTypeFilter.indexOf('Vegetariano') !== -1} />
          <Form.Checkbox
            label="Opciones veganas"
            name="Opciones veganas"
            onChange={this.onChange}
            checked={this.props.placeTypeFilter.indexOf('Opciones veganas') !== -1} />
          <Form.Checkbox
            label="Tiendas y obradores"
            name="Tiendas y obradores"
            onChange={this.onChange}
            checked={this.props.placeTypeFilter.indexOf('Tiendas y obradores') !== -1} />
        </Form>
      </Segment>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlaceFilter)
