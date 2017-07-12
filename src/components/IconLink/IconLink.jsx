import React from 'react';
// import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import Icon from 'components/Icon/Icon';

const IconLink = ({ fields }) => (
  <a href={fields.url['en-GB']}>
    <Item element={Icon} itemId={fields.icon['en-GB'].sys.id} />
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
