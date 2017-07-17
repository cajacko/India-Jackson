import { WHITE, GREY_LIGHT_HIGHLIGHT } from 'constants/colours';
import { TEXT } from 'constants/text';

const imageWidth = 600;

export default {
  container: {
    backgroundColor: WHITE,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: GREY_LIGHT_HIGHLIGHT,
  },

  imageWrapper: {
    maxWidth: imageWidth,
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
    maxWidth: imageWidth,
    margin: '0 auto',
    textAlign: 'center',
  },

  heading: {
    ...TEXT,
    margin: 0,
    fontSize: 40,
  },

  description: {
    ...TEXT,
    fontSize: 20,
    margin: '30px 0 0 0',
  },

  images: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  image: {
    backgroundColor: WHITE,
    marginBottom: 20,
  },
};
