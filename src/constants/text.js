import { TURQOISE, BLACK } from 'constants/colours';

export const TEXT = {
  fontSize: 12,
  lineHeight: 1.5,
  color: BLACK,
  fontFamily: 'helvetica, sans-serif',
  fontWeight: 400,
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
