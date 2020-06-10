import palette from 'assets/themes/palette';
import { get as _get } from 'lodash/object';

const selectColor = path => {
  const npath = path || 'text.primary';
  return _get(palette, npath);
};

export default selectColor;
