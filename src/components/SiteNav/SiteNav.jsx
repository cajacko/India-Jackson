import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';
import Icon from 'components/Icon/Icon';
import IconLink from 'components/IconLink/IconLink';
import style from 'components/SiteNav/SiteNav.style';

const SiteNav = ({ logo, iconLinks, menuIcon }) => (
  <nav style={style.container}>
    <div style={style.wrapper}>
      <Link style={style.logo} to="/">
        <Item asset element={Image} itemId={logo} height={70} width={200} />
      </Link>
      <ul style={style.iconLinks}>
        {
          iconLinks.map(id => (
            <li style={style.iconLink} key={id}>
              <Item
                element={IconLink}
                itemId={id}
              />
            </li>
          ))
        }
      </ul>

      <button style={style.menuButton}>
        <Item element={Icon} itemId={menuIcon} />
      </button>
    </div>
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
