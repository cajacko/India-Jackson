/* eslint react/no-danger: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ svg }) => (
  <div dangerouslySetInnerHTML={{ __html: svg }} />
);

// Icon.propTypes = {
//   fields: PropTypes.shape({
//     svg: PropTypes.shape({
//       'en-GB': PropTypes.string,
//     }),
//   }).isRequired,
// };

export default Icon;
