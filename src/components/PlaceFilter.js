import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setPlaceTypeFilter } from '../redux/actions/places'

class PlaceFilter extends Component {

  onChange = (e) => {
    const placeTypeFilter = this.props.placeTypeFilter.concat();
    const index = placeTypeFilter.indexOf(e.target.name);
    if (index !== -1) {
      placeTypeFilter.splice(index, 1);
    } else {
      placeTypeFilter.push(e.target.name);
    }
    this.props.setPlaceTypeFilter(placeTypeFilter)
  };

  render () {
    return (
      <form>
        <label htmlFor="veganos">Veganos
          <input
            type="checkbox"
            name="veganos"
            onChange={this.onChange}
            checked={this.props.placeTypeFilter.indexOf('veganos') !== -1} />
        </label>
        <label htmlFor="vegetarianos">Vegetarianos
          <input
            type="checkbox"
            name="vegetarianos"
            onChange={this.onChange}
            checked={this.props.placeTypeFilter.indexOf('vegetarianos') !== -1} />
        </label>
        <label htmlFor="opciones_veganas">Opciones veganas
          <input
            type="checkbox"
            name="opciones_veganas"
            onChange={this.onChange}
            checked={this.props.placeTypeFilter.indexOf('opciones_veganas') !== -1} />
        </label>
      </form>
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
