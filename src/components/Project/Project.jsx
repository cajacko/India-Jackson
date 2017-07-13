import React from 'react';
// import PropTypes from 'prop-types';
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
                    asset
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

// SiteHeader.propTypes = {
//   fields: PropTypes.shape({
//     sitetitle: PropTypes.shape({
//       'en-GB': PropTypes.string,
//     }),
//     description: PropTypes.shape({
//       'en-GB': PropTypes.string,
//     }),
//     image: PropTypes.shape({
//       'en-GB': PropTypes.shape({
//         sys: PropTypes.shape({
//           id: PropTypes.string,
//         }),
//       }),
//     }),
//   }).isRequired,
// };

export default Project;
