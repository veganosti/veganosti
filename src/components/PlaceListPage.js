import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui'
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { placesSortedByProximity } from '../redux/selectors/places'
import { formatDistance } from '../utils/formatters'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    paddingTop: 56,
    background: theme.palette.background.paper,
  }
  // },
  // listItem: {
  //   borderBottom: '1px solid #eee'
  // }
});

const PlaceListPage = ({ places, classes }) => (
  <div className={classes.root}>
    <List>
      {places.map(place => (
        <div>
          <ListItem key={place.id} button component={Link} to={`/places/${place.id}`} className={classes.listItem}>
            <img src="http://via.placeholder.com/50x50" alt="p" />
            <ListItemText primary={place.name} secondary={place.description} />
            <ListItemSecondaryAction>
              <Typography style={{fontSize: 10}}>
                {formatDistance(place.distance)}
              </Typography>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider/>
        </div>
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
