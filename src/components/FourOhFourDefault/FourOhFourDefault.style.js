import { TEXT } from 'constants/text';

export default {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
  },

  heading: {
    ...TEXT,
    fontSize: 50,
  },

  text: {
    ...TEXT,
    fontSize: 20,
  },

  count: {
    ...TEXT,
    fontSize: 30,
  },
};
