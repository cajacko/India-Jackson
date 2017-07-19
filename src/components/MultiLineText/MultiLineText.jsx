import React from 'react';
import PropTypes from 'prop-types';

const MultiLineText = ({
  text,
  style,
  firstStyle,
  lastStyle,
  containerStyle,
}) => {
  let i = 0;
  const paragraphs = text.split(/\r?\n/);

  return (
    <div style={containerStyle}>
      {
        paragraphs.map((p) => {
          i += 1;
          let pStyle = style;

          if (i === 1) {
            pStyle = { ...pStyle, ...firstStyle };
          }

          if (i === paragraphs.length) {
            pStyle = { ...pStyle, ...lastStyle };
          }

          return <p key={i} style={pStyle}>{p}</p>;
        })
      }
    </div>
  );
};

MultiLineText.propTypes = {
  text: PropTypes.string.isRequired,
  // eslint-disable-next-line
  style: PropTypes.object,
  // eslint-disable-next-line
  firstStyle: PropTypes.object,
  // eslint-disable-next-line
  lastStyle: PropTypes.object,
  // eslint-disable-next-line
  containerStyle: PropTypes.object,
};

MultiLineText.defaultProps = {
  style: {},
  firstStyle: {},
  lastStyle: {},
  containerStyle: {},
};

export default MultiLineText;
