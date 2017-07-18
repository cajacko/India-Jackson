import { LINK, TEXT } from 'constants/text';
import { TURQOISE } from 'constants/colours';

const fontSize = 16;

export default {
  link: {
    ...LINK,
    fontSize,
    display: 'block',
    padding: 10,
    textAlign: 'center',
  },

  active: {
    ...TEXT,
    fontSize,
    color: TURQOISE,
    display: 'block',
    padding: 10,
    textAlign: 'center',
  },
};
