/* eslint-disable import/prefer-default-export */
import classNames from 'classnames';

export const classnameForInput = (err) => {
  return classNames({
    doNotValidates: err,
  });
};
