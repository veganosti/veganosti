import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui'
import ExternalLink from './ExternalLink'

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

const ContactPage = ({classes}) => (
  <Paper className={classes.root}>

    <Typography type="display1" gutterBottom>Contacto</Typography>

    <Typography paragraph>
      <ExternalLink href="mailto:veganosti@riseup.org">veganosti@riseup.org</ExternalLink>
    </Typography>
  </Paper>
);

ContactPage.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(ContactPage);

