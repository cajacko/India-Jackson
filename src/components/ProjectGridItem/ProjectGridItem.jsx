import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Link from 'components/Link/Link';
import Item from 'containers/Item/Item';
import Image from 'components/Image/Image';
import style from 'components/ProjectGridItem/ProjectGridItem.style';

const ProjectGridItem = ({ url, featureImage, title }) => (
  <li style={style.container}>
    <Link key={`ProjectGridItem-link-${url}`} to={`/${url}`} style={style.link}>
      <div style={style.image}>
        <Item element={Image} itemId={featureImage} width={500} height={400} />
      </div>
      <h2 key={`ProjectGridItem-h2-${url}`} style={style.title}>{title}</h2>
    </Link>
  </li>
);

ProjectGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  featureImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Radium(ProjectGridItem);
