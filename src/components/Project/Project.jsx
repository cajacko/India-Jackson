import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';
import style from 'components/Project/Project.style';
import WindowResize from 'components/WindowResize/WindowResize';

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

    let headingStyles = style.heading;
    let descriptionStyles = style.description;

    if (!this.props.backgroundImage) {
      headingStyles = { ...headingStyles, ...style.headingAlt };
      descriptionStyles = { ...descriptionStyles, ...style.descriptionAlt };
    }

    return (
      <WindowResize onWindowResize={this.onWindowResize}>
        <section style={style.container}>
          <header style={style.header}>
            <div style={style.headerWrap}>
              <h1 style={headingStyles}>{this.props.title}</h1>
              { this.props.description &&
                <p style={descriptionStyles}>{this.props.description}</p>
              }
            </div>
            { this.props.backgroundImage &&
              <div style={style.backgroundImage}>
                <div style={style.backgroundOpacity} />
                <Item
                  element={Image}
                  itemId={this.props.backgroundImage}
                  stretchWidth={this.state.width}
                />
              </div>
            }
          </header>
          <ul style={style.images}>
            {
              this.props.images.map((id) => {
                i += 1;

                let styles = style.image;

                if (i % 2) {
                  styles = { ...styles, ...style.imageAlt };
                }

                return (
                  <li key={`${i}-${id}`} style={styles}>
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
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Project.defaultProps = {
  description: null,
  backgroundImage: null,
};

export default Project;
