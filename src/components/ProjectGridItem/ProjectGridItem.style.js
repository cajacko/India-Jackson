import { VERTICAL_SPACING } from 'components/ProjectGrid/ProjectGrid.style';
import { LINK } from 'constants/text';

export default {
  container: {
    width: 'calc(33.333% - 20px)',
    marginBottom: VERTICAL_SPACING,
  },

  link: {
    textDecoration: 'none',
  },

  image: {
    ':hover': {
      opacity: 0.5,
    },
  },

  title: {
    ...LINK,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 400,
  },
};
