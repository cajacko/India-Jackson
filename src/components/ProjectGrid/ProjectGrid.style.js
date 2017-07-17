import { GREY_LIGHT, GREY_LIGHT_HIGHLIGHT } from 'constants/colours';
import { SITE_WIDTH } from 'constants/spacing';

export const VERTICAL_SPACING = 70;

export default {
  container: {
    backgroundColor: GREY_LIGHT,
    borderBottomStyle: 'solid',
    borderTopStyle: 'solid',
    borderWidth: 1,
    borderColor: GREY_LIGHT_HIGHLIGHT,
  },

  wrapper: {
    maxWidth: SITE_WIDTH,
    margin: '0 auto',
    display: 'flex',
    padding: `${VERTICAL_SPACING}px 10px 0 10px`,
    listStyle: 'none',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
};
