import { WHITE, GREY_LIGHT, GREY_LIGHT_HIGHLIGHT } from 'constants/colours';
import { TEXT } from 'constants/text';

export default {
  container: {
    backgroundColor: WHITE,
  },

  wrapper: {
    maxWidth: 600,
    margin: '0 auto',
    display: 'flex',
    padding: '50px 10px',
  },

  image: {
    flex: 1,
  },

  textWrapper: {
    flex: 2,
    paddingLeft: 40,
    display: 'flex',
    alignItems: 'center',
  },

  paragraph: {
    ...TEXT,
    fontSize: 20,
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
