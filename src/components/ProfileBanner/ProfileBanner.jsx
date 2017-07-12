import React from 'react';
// import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';

const ProfileBanner = ({ fields }) => (
  <section>
    <Item asset element={Image} itemId={fields.image['en-GB'].sys.id} />
    <div>
      <p>{fields.description['en-GB']}</p>
      <a href={fields.buttonLink['en-GB']}>{fields.buttonText['en-GB']}</a>
    </div>
  </section>
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

export default ProfileBanner;
