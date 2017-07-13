import React from 'react';
// import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import Icon from 'components/Icon/Icon';

const IconLink = ({ url, icon }) => (
  <a href={url}>
    <Item element={Icon} itemId={icon} />
  </a>
);

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

export default IconLink;
