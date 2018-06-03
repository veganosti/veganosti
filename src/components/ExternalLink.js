import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({href, children}) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default ExternalLink;