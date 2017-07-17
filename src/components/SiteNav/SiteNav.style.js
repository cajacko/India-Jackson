import { GREY_LIGHT, GREY_LIGHT_HIGHLIGHT, BLACK, TURQOISE } from 'constants/colours';

const iconSize = 25;

export default {
  container: {
    backgroundColor: GREY_LIGHT,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: GREY_LIGHT_HIGHLIGHT,
  },

  hoverFix: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  wrapper: {
    maxWidth: 800,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'column',
  },

  navItems: {
    display: 'flex',
    width: '100%',
  },

  navContent: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },

  logo: {
    width: 350,
    marginBottom: 20,
  },

  iconLinks: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    margin: `0 0 0 ${iconSize}px`,
    padding: 0,
    justifyContent: 'center',
  },

  links: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    margin: 0,
    padding: '0 30px 0 0',
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
    margin: '0 20px',
  },

  menuButton: {
    width: iconSize,
    height: iconSize,
    appearance: 'none',
    background: 'none',
    border: 0,
    padding: 0,
    margin: 0,
    cursor: 'pointer',
    position: 'relative',
    ':focus': {
      outline: 'none',
    },
  },

  buttonColour: BLACK,
  buttonColourHover: TURQOISE,

  hidden: {
    opacity: 0,
  },
};
