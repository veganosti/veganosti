import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui'

const styles = theme => ({

  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 675
  }),

  textHighlight: {
    fontWeight: 500
  }
});

const AboutPage = ({classes}) => (
  <Paper className={classes.root}>

    <Typography type="display1" gutterBottom>
      Sobre <b className={classes.textHighlight}>Vegan</b>osti
    </Typography>

    <Typography type="title" gutterBottom>Objetivos</Typography>

    <Typography paragraph><b className={classes.textHighlight}>Vegan</b>osti es un
      proyecto sin ánimo de lucro que nace con el objetivo de facilitar el
      acceso a productos y servicios veganos y promover el aumento de la oferta
      vegana en donostialdea.
    </Typography>

    <Typography type="title" gutterBottom>Política de privacidad</Typography>

    <Typography paragraph>La navegación en esta web es privada, no
      utilizamos cookies y no almacenamos, explotamos o proporcionamos a
      terceros ninguna información que facilites mientras navegas por este
      espacio.
    </Typography>
  </Paper>
);

AboutPage.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(AboutPage);

