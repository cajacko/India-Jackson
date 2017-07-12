import React from 'react';
// import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';
import Icon from 'components/Icon/Icon';
import IconLink from 'components/IconLink/IconLink';

const SiteNav = ({ fields }) => (
  <nav>
    <Item asset element={Image} itemId={fields.logo['en-GB'].sys.id} />
    <ul>
      {
        fields.iconLinks['en-GB'].map(({ sys }) => (
          <Item
            key={sys.id}
            element={IconLink}
            itemId={sys.id}
          />
        ))
      }
    </ul>

    <button>
      <Item element={Icon} itemId={fields.menuIcon['en-GB'].sys.id} />
    </button>
  </nav>
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

export default SiteNav;
