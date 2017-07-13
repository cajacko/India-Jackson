import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import Link from 'components/Link/Link';
import style from 'components/SiteNavTextLink/SiteNavTextLink.style';

const SiteNavTextLink = ({ url, title }) => (
  <Link to={`/${url}`} style={style.link}>
    {title}
  </Link>
);

SiteNavTextLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Radium(SiteNavTextLink);
