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
};
