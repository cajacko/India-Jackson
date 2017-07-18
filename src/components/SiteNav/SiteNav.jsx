import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';
import Icon from 'components/Icon/Icon';
import IconLink from 'components/IconLink/IconLink';
import SiteNavTextLink from 'containers/SiteNavTextLink/SiteNavTextLink';
import style, { ICON_SIZE } from 'components/SiteNav/SiteNav.style';

class SiteNav extends Component {
  constructor(props) {
    super(props);

    this.state = { hover: false };
    this.hover = this.hover.bind(this);
  }

  hover(hover) {
    if (hover !== this.state.hover) {
      this.setState({ hover });
    }
  }

  render() {
    let menuIcon = this.props.menuIcon;

    if (this.props.showSubMenu) {
      menuIcon = this.props.menuCloseIcon;
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
          <Link style={style.logo} to="/">
            <Item
              element={Image}
              itemId={this.props.logo}
              width={350}
            />
          </Link>

          <div style={style.navItems}>
            <div style={style.navContent}>
              <ul style={style.iconLinks}>
                {
                  this.props.iconLinks.map(id => (
                    <li style={style.iconLink} key={id}>
                      <Item
                        element={IconLink}
                        itemId={id}
                        height={ICON_SIZE}
                        width={ICON_SIZE}
                      />
                    </li>
                  ))
                }
              </ul>
            </div>

            <button
              style={buttonStyle}
              onClick={this.props.menuClick}
              onMouseOver={() => this.hover(true)}
              onMouseOut={() => this.hover(false)}
            >
              <div style={style.hoverFix} />
              <Item
                element={Icon}
                itemId={menuIcon}
                colour={buttonColour}
                height={ICON_SIZE}
                width={ICON_SIZE}
              />
            </button>
          </div>
        </div>
        { this.props.showSubMenu &&
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
      </nav>
    );
  }
}

SiteNav.propTypes = {
  menuClick: PropTypes.func.isRequired,
  showSubMenu: PropTypes.bool.isRequired,
  menuIcon: PropTypes.string.isRequired,
  menuCloseIcon: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  iconLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Radium(SiteNav);
