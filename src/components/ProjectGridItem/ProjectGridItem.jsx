import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';
import style from 'components/ProjectGridItem/ProjectGridItem.style';

const ProjectGridItem = ({ url, featureImage, title }) => (
  <li style={style.container}>
    <Link to={`/${url}`}>
      <div style={style.image}>
        <Item asset element={Image} itemId={featureImage} />
      </div>
      <h2 style={style.title}>{title}</h2>
    </Link>
  </li>
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

export default ProjectGridItem;
