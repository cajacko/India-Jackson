import { VERTICAL_SPACING } from 'components/ProjectGrid/ProjectGrid.style';
import { LINK } from 'constants/text';

export default {
  container: {
    width: 'calc(33.333% - 20px)',
    marginBottom: VERTICAL_SPACING,
    '@media (max-width: 740px)': {
      width: 'calc(50% - 20px)',
    },

    '@media (max-width: 450px)': {
      width: '100%',
    },
  },

  link: {
    textDecoration: 'none',
    cursor: 'pointer',
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
