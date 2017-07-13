import React from 'react';
import PropTypes from 'prop-types';
import style from 'components/Image/Image.style';

const Image = ({ file, title, className, width, height, fill }) => {
  let imageHeight = file.details.image.height;
  let imageWidth = file.details.image.width;

  let fillText = '';

  if (fill) {
    fillText = '&fit=fill';
  }

  const ratio = imageHeight / imageWidth;

  if (height && width) {
    imageHeight = height;
    imageWidth = width;
  } else if (height && !width) {
    imageHeight = height;
    imageWidth = Math.floor(imageHeight / ratio);
    fillText = '&fit=fill';
  } else if (!height && width) {
    imageWidth = width;
    imageHeight = Math.floor(ratio * imageWidth);
    fillText = '&fit=fill';
  }

  const url = `${file.url}?w=${imageWidth}&h=${imageHeight}${fillText}&fm=jpg&fl=progressive`;

  return (
    <img
      style={style.image}
      width={imageWidth}
      height={imageHeight}
      src={url}
      className={className}
      alt={title}
    />
  );
};

// Image.propTypes = {
//   width: PropTypes.number,
//   height: PropTypes.number,
//   fill: PropTypes.bool,
//   className: PropTypes.string,
//   fields: PropTypes.shape({
//     title: PropTypes.shape({
//       'en-GB': PropTypes.string,
//     }),
//     file: PropTypes.shape({
//       'en-GB': PropTypes.shape({
//         url: PropTypes.string,
//         details: PropTypes.shape({
//           image: PropTypes.shape({
//             width: PropTypes.number,
//             height: PropTypes.number,
//           }),
//         }),
//       }),
//     }),
//   }).isRequired,
// };

Image.defaultProps = {
  className: null,
  width: null,
  height: null,
  fill: true,
};

export default Image;
