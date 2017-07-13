import { GREY_LIGHT, GREY_LIGHT_HIGHLIGHT } from 'constants/colours';

const iconSize = 30;

export default {
  container: {
    backgroundColor: GREY_LIGHT,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: GREY_LIGHT_HIGHLIGHT,
  },

  wrapper: {
    maxWidth: 800,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
  },

  navContent: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },

  logo: {
    width: 200,
  },

  iconLinks: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    justifyContent: 'flex-end',
  },

  links: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    paddingRight: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  iconLink: {
    width: iconSize,
    height: iconSize,
    marginRight: 20,
  },

  menuButton: {
    width: iconSize,
    height: iconSize,
    appearance: 'none',
    background: 'none',
    border: 0,
    padding: 0,
    margin: 0,
  },

  hidden: {
    opacity: 0,
  },
};
