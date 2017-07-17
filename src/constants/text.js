import { TURQOISE, BLACK } from 'constants/colours';

export const TEXT = {
  fontSize: 12,
  lineHeight: 1.5,
  color: BLACK,
  fontFamily: '\'Josefin Sans\', helvetica, sans-serif',
  fontWeight: 300,
  textDecoration: 'none',
};

export const LINK = {
  ...TEXT,
  color: BLACK,
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
    color: TURQOISE,
  },
};
