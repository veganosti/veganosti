import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui'
import Card, { CardContent, CardActions } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { InfoWindow } from 'react-google-maps'
import { Link } from 'react-router-dom'
import * as actions from '../redux/actions/places'

const styles = {
  card: {
    maxWidth: 250,
  }
};

const MarkerInfoWindow = ({place, deselectPlace, classes}) => (
  <InfoWindow onCloseClick={() => deselectPlace()}>
    <Card className={classes.card}>
      <CardContent>
        <Typography type="headline" component="h2">
          {place.name}
        </Typography>
        <Typography component="p">
          {place.address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button dense color="primary" component={Link} to={`/places/${place.id}`}>
          Más información
        </Button>
        <Button dense color="primary">
          Cómo llegar
        </Button>
      </CardActions>
    </Card>
  </InfoWindow>
);

MarkerInfoWindow.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  deselectPlace: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
  }).isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    'deselectPlace': () => dispatch(actions.deselectPlace())
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(MarkerInfoWindow));
