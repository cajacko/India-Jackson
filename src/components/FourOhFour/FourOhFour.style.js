import { TEXT } from 'constants/text';

const spacing = 80;

export default {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${spacing}px 0`,
  },

  heading: {
    ...TEXT,
    margin: 0,
    fontSize: 100,
    fontWeight: 800,
  },

  text: {
    ...TEXT,
    fontSize: 20,
    marginTop: spacing,
  },
};
