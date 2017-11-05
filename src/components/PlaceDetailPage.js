import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card'
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import PhoneIcon from 'material-ui-icons/Phone';
import DirectionsIcon from 'material-ui-icons/Directions';

const styles = () => ({
  media: {
    height: 194,
  },
});

const PlaceDetailPage = ({places, match, classes}) => {
  const place = places[match.params.id - 1]

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={`https://maps.googleapis.com/maps/api/staticmap?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&size=700x300&zoom=18&markers=${place.lat},${place.lng}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {place.name}
          </Typography>
          <Typography component="p">
            {place.description}
          </Typography>
          <Typography component="p">
            {place.address}
          </Typography>
          <Typography component="p">
            {place.phone}
          </Typography>
          <Typography component="p">
            {place.type}
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>
          <a href={`tel:${place.phone}`}>
            <IconButton aria-label="Llamar">
              <PhoneIcon />
            </IconButton>
          </a>
          <a href={`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`} target="_blank">
            <IconButton aria-label="Cómo llegar">
              <DirectionsIcon />
            </IconButton>
          </a>
        </CardActions>
      </Card>
    </div>
  )
}

PlaceDetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  classes: PropTypes.object.isRequired,
}

function mapStateToProps (state) {
  return {
    places: state.places,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(PlaceDetailPage))
