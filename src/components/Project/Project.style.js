import { BLACK, WHITE, GREY_LIGHT, GREY_LIGHT_HIGHLIGHT } from 'constants/colours';
import { TEXT } from 'constants/text';

export default {
  container: {
    backgroundColor: GREY_LIGHT,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: GREY_LIGHT_HIGHLIGHT,
  },

  imageWrapper: {
    maxWidth: 600,
    margin: '0 auto',
  },

  header: {
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: WHITE,
  },

  headerWrap: {
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '60px 0',
  },

  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backgroundOpacity: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.75,
  },

  heading: {
    ...TEXT,
    color: WHITE,
    margin: 0,
    fontSize: 40,
  },

  headingAlt: {
    color: BLACK,
  },

  descriptionAlt: {
    color: BLACK,
  },

  description: {
    ...TEXT,
    color: WHITE,
    fontSize: 20,
    margin: '30px 0 0 0',
  },

  images: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  image: {
    backgroundColor: GREY_LIGHT,
  },

  imageAlt: {
    backgroundColor: WHITE,
  },
};
