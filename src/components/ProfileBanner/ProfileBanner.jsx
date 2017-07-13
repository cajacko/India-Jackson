import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Item from 'containers/Item/Item';
import { Link } from 'components/Link/Link';
import Image from 'components/Image/Image';
import style from 'components/ProfileBanner/ProfileBanner.style';

const ProfileBanner = ({ image, description, buttonLink, buttonText }) => {
  let button;

  if (buttonLink && buttonText) {
    const domain = 'https://indiajackson.co.uk/';

    if (buttonLink.includes(domain)) {
      const url = buttonLink.replace(domain, '/');
      button = <Link style={style.link} to={url}>{buttonText}</Link>;
    } else {
      button = <a style={style.link} href={buttonLink}>{buttonText}</a>;
    }
  }

  return (
    <section style={style.container}>
      <div style={style.wrapper}>
        <div style={style.image}>
          <Item asset element={Image} itemId={image} width={200} height={200} />
        </div>
        <div style={style.textWrapper}>
          <p style={style.paragraph}>{description}</p>
          {button}
        </div>
      </div>
    </section>
  );
};

ProfileBanner.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
};

ProfileBanner.defaultProps = {
  buttonLink: null,
  buttonText: 'Click me',
};

export default Radium(ProfileBanner);
