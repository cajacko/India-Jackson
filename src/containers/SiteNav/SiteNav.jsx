import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SiteNav from 'components/SiteNav/SiteNav';

class SiteNavContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { showSubMenu: false };

    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      this.setState({ showSubMenu: false });
    }
  }

  onClick() {
    this.setState({ showSubMenu: !this.state.showSubMenu });
  }

  render() {
    return (
      <SiteNav
        menuClick={this.onClick}
        showSubMenu={this.state.showSubMenu}
        menuIcon={this.props.menuIcon}
        menuCloseIcon={this.props.menuCloseIcon}
        logo={this.props.logo}
        iconLinks={this.props.iconLinks}
        links={this.props.links}
      />
    );
  }
}

SiteNavContainer.propTypes = {
  // eslint-disable-next-line
  location: PropTypes.object.isRequired,
  menuIcon: PropTypes.string.isRequired,
  menuCloseIcon: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  iconLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withRouter(SiteNavContainer);
