import React from 'react';
// import PropTypes from 'prop-types';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';

const Project = ({ fields }) => (
  <section>
    <header>
      <h1>{fields.title['en-GB']}</h1>
      { fields.description && <p>{fields.description['en-GB']}</p> }
      { fields.backgroundImage && <Item asset element={Image} itemId={fields.backgroundImage['en-GB'].sys.id} /> }
    </header>
    <ul>
      {
        fields.images['en-GB'].map(({ sys }) => (
          <li key={sys.id}>
            <Item
              element={Image}
              itemId={sys.id}
              asset
            />
          </li>
        ))
      }
    </ul>
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

export default Project;
