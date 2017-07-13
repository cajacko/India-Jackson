import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
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

    this.state = { showSubMenu: false, hover: false };

    this.onClick = this.onClick.bind(this);
    this.hover = this.hover.bind(this);
  }

  onClick() {
    this.setState({ showSubMenu: !this.state.showSubMenu });
  }

  hover(hover) {
    if (hover !== this.state.hover) {
      this.setState({ hover });
    }
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

    let buttonStyle = style.menuButton;
    let buttonColour = style.buttonColour;

    if (this.state.hover) {
      buttonStyle = { ...buttonStyle, ...style.menuButtonHover };
      buttonColour = style.buttonColourHover;
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

          <button
            style={buttonStyle}
            onClick={this.onClick}
            onMouseOver={() => this.hover(true)}
            onMouseOut={() => this.hover(false)}
          >
            <Item element={Icon} itemId={menuIcon} colour={buttonColour} />
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

export default Radium(SiteNav);
