import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';
import style from 'components/Project/Project.style';
import WindowResize from 'components/WindowResize/WindowResize';
import MultiLineText from 'components/MultiLineText/MultiLineText';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  onWindowResize(width) {
    this.setState({ width });
  }

  render() {
    let i = 1;
    const descriptionStyle = style.description;

    switch (this.props.descriptionAlignment) {
      case 'Left':
        descriptionStyle.textAlign = 'left';
        break;
      case 'Right':
        descriptionStyle.textAlign = 'right';
        break;
      default:
        descriptionStyle.textAlign = 'center';
        break;
    }

    return (
      <WindowResize onWindowResize={this.onWindowResize}>
        <section style={style.container}>
          <header style={style.header}>
            <div style={style.headerWrap}>
              <h1 style={style.heading}>{this.props.title}</h1>
              { this.props.description &&
                <MultiLineText
                  style={descriptionStyle}
                  text={this.props.description}
                />
              }
            </div>
          </header>
          <ul style={style.images}>
            {
              this.props.images.map((id) => {
                i += 1;

                return (
                  <li key={`${i}-${id}`} style={style.image}>
                    <div style={style.imageWrapper}>
                      <Item
                        element={Image}
                        itemId={id}
                        width={1000}
                      />
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </section>
      </WindowResize>
    );
  }
}

Project.propTypes = {
  description: PropTypes.string,
  descriptionAlignment: PropTypes.string,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Project.defaultProps = {
  description: null,
  descriptionAlignment: null,
};

export default Project;
