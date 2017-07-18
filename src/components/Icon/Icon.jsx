/* eslint react/no-danger: 0 */

import React from 'react';
import { Style } from 'radium';
import PropTypes from 'prop-types';
import style from 'components/Icon/Icon.style';

let id = 0;

const Icon = ({ svg, colour, height, width }) => {
  id += 1;
  const className = `svg-${id}`;
  let string = svg.replace(new RegExp(/{{colour}}/, 'g'), colour);

  if (height) {
    string = string.replace(new RegExp(/<svg/, 'g'), `<svg height="${height}"`);
  }

  if (width) {
    string = string.replace(new RegExp(/<svg/, 'g'), `<svg width="${width}"`);
  }

  string = string.replace(new RegExp(/<svg/, 'g'), `<svg class="${className}"`);

  return (
    <div>
      <Style
        scopeSelector={`.${className}`}
        rules={{
          height,
          width,
        }}
      />
      <div dangerouslySetInnerHTML={{ __html: string }} />
    </div>
  );
};

Icon.propTypes = {
  svg: PropTypes.string.isRequired,
  colour: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

Icon.defaultProps = {
  colour: style.iconColour,
};

export default Icon;
