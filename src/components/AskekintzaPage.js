import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography'
import ExternalLink from './ExternalLink';

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
      <ExternalLink href="http://askekintza.org">Askekintza</ExternalLink> es una
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
        <li><ExternalLink href="http://askekintza.org">Askekintza.org</ExternalLink></li>
        <li><ExternalLink href="https://twitter.com/askekintza">Twitter</ExternalLink></li>
        <li><ExternalLink href="https://www.facebook.com/askekintza">Facebook</ExternalLink></li>
        <li><ExternalLink href="https://www.youtube.com/user/Liberacionaskekintza">Youtube</ExternalLink></li>
        <li><ExternalLink href="https://www.instagram.com/askekintza/">Instagram</ExternalLink></li>
      </ul>
    </Typography>
  </Paper>
);


AskekintzaPage.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(AskekintzaPage);
