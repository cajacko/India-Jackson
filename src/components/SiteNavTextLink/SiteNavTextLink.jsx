import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SiteNavTextLink = ({ url, title }) => (
  <Link to={`/${url}`}>
    {title}
  </Link>
);

SiteNavTextLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SiteNavTextLink;
