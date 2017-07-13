import { LINK, TEXT } from 'constants/text';
import { TURQOISE } from 'constants/colours';

const fontSize = 16;

export default {
  link: {
    ...LINK,
    fontSize,
  },

  active: {
    ...TEXT,
    fontSize,
    color: TURQOISE,
  },
};
