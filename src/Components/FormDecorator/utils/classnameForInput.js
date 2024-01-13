/* eslint-disable import/prefer-default-export */
import classNames from 'classnames';

export const classnameForInput = (err, textField) => {
  return classNames({
    doNotValidates: err,
    textField: !!textField,
  });
};
