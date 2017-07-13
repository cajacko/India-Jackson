import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';
import Icon from 'components/Icon/Icon';
import IconLink from 'components/IconLink/IconLink';
import SiteNavTextLink from 'components/SiteNavTextLink/SiteNavTextLink';
import style from 'components/SiteNav/SiteNav.style';

class SiteNav extends Component {
  constructor(props) {
    super(props);

    this.state = { showSubMenu: false };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ showSubMenu: !this.state.showSubMenu });
  }

  render() {
    let menuIcon = this.props.menuIcon;
    let iconLinksStyle = style.iconLinks;
    let logoStyle = style.logo;

    if (this.state.showSubMenu) {
      menuIcon = this.props.menuCloseIcon;
      iconLinksStyle = { ...iconLinksStyle, ...style.hidden };
      logoStyle = { ...logoStyle, ...style.hidden };
    }

    return (
      <nav style={style.container}>
        <div style={style.wrapper}>
          <div style={style.navContent}>
            <Link style={logoStyle} to="/">
              <Item
                element={Image}
                itemId={this.props.logo}
                height={70}
                width={200}
              />
            </Link>
            <ul style={iconLinksStyle}>
              {
                this.props.iconLinks.map(id => (
                  <li style={style.iconLink} key={id}>
                    <Item
                      element={IconLink}
                      itemId={id}
                    />
                  </li>
                ))
              }
            </ul>
            { this.state.showSubMenu &&
              <ul style={style.links}>
                {
                  this.props.links.map(id => (
                    <li style={style.link} key={id}>
                      <Item
                        element={SiteNavTextLink}
                        itemId={id}
                      />
                    </li>
                  ))
                }
              </ul>
            }
          </div>

          <button style={style.menuButton} onClick={this.onClick}>
            <Item element={Icon} itemId={menuIcon} />
          </button>
        </div>
      </nav>
    );
  }
}

SiteNav.propTypes = {
  menuIcon: PropTypes.string.isRequired,
  menuCloseIcon: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  iconLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SiteNav;
