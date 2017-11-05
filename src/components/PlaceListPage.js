import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui'
import List, { ListItem, ListItemText } from 'material-ui/List'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { placesSortedByProximity } from '../redux/selectors/places'
import { formatDistance } from '../utils/formatters'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

const PlaceListPage = ({ places, classes }) => (
  <div className={classes.root}>
    <List>
      {places.map(place => (
        <ListItem key={place.id} button component={Link} to={`/places/${place.id}`}>
          <img src="http://via.placeholder.com/75x75" alt="p" />
          <ListItemText primary={place.name} secondary={formatDistance(place.distance)} />
        </ListItem>
      ))}
    </List>
  </div>
)

PlaceListPage.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      distance: PropTypes.number
    }).isRequired
  ).isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
}

function mapStateToProps (state) {
  return {
    places: placesSortedByProximity(state),
  }
}

export default connect(mapStateToProps)(withStyles(styles)(PlaceListPage))
