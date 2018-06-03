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

    <Typography paragraph>
      <a href="http://askekintza.org" target="_blank">Askekintza</a> es una
      organización que lucha por la
      liberación animal y el fin del especismo en Donostia y alrededores.
      Esta organización realizó una guía vegana de Donostia
      en PDF, que ha sido la base para contruir este
      espacio.
    </Typography>

    <Typography paragraph>Desde aquí queremos agradecer a Askekintza habernos
      cedido esta información, y sobre todo agradecerles la lucha diaria realizada
      por sus activistas para acabar con la explotación animal.</Typography>

    <Typography paragraph>Si quieres conocer más sobre Askekintza así como
      apoyar su actividad, puedes obtener más información en su web y
      redes sociales:</Typography>

    <Typography>
      <ul>
        <li><a href="http://askekintza.org" target="_blank">Askekintza.org</a></li>
        <li><a href="https://twitter.com/askekintza" target="_blank">Twitter</a></li>
        <li><a href="https://www.facebook.com/askekintza" target="_blank">Facebook</a></li>
        <li><a href="https://www.youtube.com/user/Liberacionaskekintza" target="_blank">Youtube</a></li>
        <li><a href="https://www.instagram.com/askekintza/" target="_blank">Instagram</a></li>
      </ul>
    </Typography>
  </Paper>
);


AskekintzaPage.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(AskekintzaPage);
