import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import Icon from 'components/Icon/Icon';
import style from 'components/IconLink/IconLink.style';

class IconLink extends Component {
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
    let iconLinkStyle = style.iconLink;
    let colour = style.iconLinkColour;

    if (this.state.hover) {
      iconLinkStyle = { ...iconLinkStyle, ...style.iconLinkHover };
      colour = style.iconLinkColourHover;
    }

    return (
      <a
        href={this.props.url}
        onMouseOver={() => this.hover(true)}
        onMouseOut={() => this.hover(false)}
        style={iconLinkStyle}
      >
        <div style={style.hoverFix} />
        <Item
          element={Icon}
          itemId={this.props.icon}
          colour={colour}
          height={this.props.height}
          width={this.props.width}
        />
      </a>
    );
  }
}

IconLink.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default IconLink;
