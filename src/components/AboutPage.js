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
  })
});

const AboutPage = ({classes}) => (
  <Paper className={classes.root}>

    <Typography>Sobre Veganosti</Typography>

    <Typography paragraph="true">Veganosti es un proyecto sin ánimo de lucro
      que nace con el objetivo de facilitar el acceso a productos y servicios
      veganos y promover el aumento de la oferta vegana en donostialdea.
    </Typography>

    <Typography paragraph="true">Si bien sabemos que la liberación animal y el
      fin del especismo no se conseguirá a traves del consumo, creemos que este
      humilde espacio puede ser una fuente de información útil y puede ayudar
      a promover una oferta vegana más amplia.</Typography>

    <Typography>Aviso legal</Typography>

    <Typography paragraph="true">La navegación en esta web es privada, no
      utilizamos cookies y tu información nunca será almacenada, explotada ni
      proporcionada a terceros. En definitiva, al contrario que en la mayor
      parte de la web, te encuentras en un espacio seguro para tu privacidad.
    </Typography>
  </Paper>
);

AboutPage.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(AboutPage);

