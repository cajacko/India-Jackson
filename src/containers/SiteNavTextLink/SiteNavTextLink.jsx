import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SiteNavTextLink from 'components/SiteNavTextLink/SiteNavTextLink';

class SiteNavTextLinkContainer extends Component {
  render() {
    let active = false;

    if (this.props.location.pathname === `/${this.props.url}`) {
      active = true;
    }

    return (
      <SiteNavTextLink
        url={this.props.url}
        title={this.props.title}
        active={active}
      />
    );
  }
}

SiteNavTextLinkContainer.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(SiteNavTextLinkContainer);
