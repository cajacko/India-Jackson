import React from 'react';
// import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';
import style from 'components/ProfileBanner/ProfileBanner.style';

const ProfileBanner = ({ fields }) => (
  <section style={style.container}>
    <div style={style.wrapper}>
      <div style={style.image}>
        <Item asset element={Image} itemId={fields.image['en-GB'].sys.id} width={200} height={200} />
      </div>
      <div style={style.textWrapper}>
        <p style={style.paragraph}>{fields.description['en-GB']}</p>
        <a style={style.link} href={fields.buttonLink['en-GB']}>{fields.buttonText['en-GB']}</a>
      </div>
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
