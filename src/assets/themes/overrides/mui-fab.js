export default {
  label: {
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  root: {
    lineHeight: '1.4rem',
    '&$disabled': {
      cursor: 'not-allowed',
      pointerEvents: 'auto',
    },
  },
};
