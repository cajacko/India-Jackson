import React from 'react';
import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';
import style from 'components/Project/Project.style';

const Project = ({ description, title, backgroundImage, images }) => {
  let i = 1;

  let headingStyles = style.heading;
  let descriptionStyles = style.description;

  if (!description) {
    headingStyles = { ...headingStyles, ...style.headingAlt };
    descriptionStyles = { ...descriptionStyles, ...style.descriptionAlt };
  }

  return (
    <section style={style.container}>
      <header style={style.header}>
        <div style={style.headerWrap}>
          <h1 style={headingStyles}>{title}</h1>
          { description && <p style={descriptionStyles}>{description}</p> }
        </div>
        { backgroundImage &&
          <div style={style.backgroundImage}>
            <div style={style.backgroundOpacity} />
            <Item asset element={Image} itemId={backgroundImage} />
          </div>
        }
      </header>
      <ul style={style.images}>
        {
          images.map((id) => {
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
  );
};

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
