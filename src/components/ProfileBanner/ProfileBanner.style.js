import { WHITE, GREY_LIGHT, GREY_LIGHT_HIGHLIGHT } from 'constants/colours';
import { TEXT } from 'constants/text';

const mediaQuery = '@media (max-width: 450px)';

export default {
  container: {
    backgroundColor: WHITE,
  },

  wrapperMaxWidth: 600,

  wrapper: {
    margin: '0 auto',
    display: 'flex',
    padding: '50px 10px',
    [mediaQuery]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  image: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },

  textWrapper: {
    flex: 2,
    paddingLeft: 40,
    display: 'flex',
    alignItems: 'center',
    [mediaQuery]: {
      paddingLeft: 0,
      marginTop: 40,
    },
  },

  paragraph: {
    ...TEXT,
    fontSize: 20,
    margin: '0 0 14px 0',
  },

  paragraphLast: {
    margin: 0,
  },

  link: {
    marginTop: 20,
    display: 'inline-block',
    padding: '10px 20px',
    background: GREY_LIGHT,
    borderColor: GREY_LIGHT_HIGHLIGHT,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    ...TEXT,
    ':hover': {
      textDecoration: 'underline',
      background: GREY_LIGHT_HIGHLIGHT,
    },
  },
};
