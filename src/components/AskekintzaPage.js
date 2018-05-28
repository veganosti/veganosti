import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography'

const styles = theme => ({

  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 675
  }),

  logo: {
    width: 250,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
  }
});

const AskekintzaPage = ({classes}) => (
  <Paper className={classes.root}>
    <img className={classes.logo} src="/img/askekintza.png" alt="Askekintza" />

    <Typography paragraph="true">Askekintza es una asociación sin ánimo de lucro
      que lucha por la liberación animal y el fin del especismo, visibilizando
      la explotación y opresión que sufren los animales no humanos en
      Donostialdea.</Typography>

    <Typography paragraph="true">Veganosti se ha construido gracias a la
      información recopilada por Askekintza, por lo que, sin su labor previa,
      Veganosti no hubiera podido ser una realidad. Desde este pequeño espacio
      queremos agradecer la cesión de la información y sobre todo la lucha
      diaria tan necesaria realizada por sus activistas.</Typography>

    <Typography paragraph="true">Si quieres conocer más sobre el Askekintza así
      como apoyar su actividad, puedes obtener más información en su web y
      redes sociales:</Typography>

    <Typography>
      <ul>
        <li><a href="http://askekintza.org">askekintza.org</a></li>
        <li><a href="https://twitter.com/askekintza">Twitter</a></li>
        <li><a href="https://www.facebook.com/askekintza">Facebook</a></li>
        <li><a href="https://www.youtube.com/user/Liberacionaskekintza">Youtube</a></li>
        <li><a href="https://www.instagram.com/askekintza/">Instagram</a></li>
        <li><a href="mailto:askekintza@riseup.net">askekintza@riseup.net</a></li>
      </ul>
    </Typography>
  </Paper>
);


AskekintzaPage.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(AskekintzaPage);
