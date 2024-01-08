/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { classnameForInput } from '../../FormDecorator/utils/classnameForInput';
import { validateConfigAgreeCheckbox } from '../validateConfigs/validateConfigs';

function LabelRegCheckbox(props) {
  const { errors, register } = props;
  return (
    <label className="agreeField">
      <input
        type="checkbox"
        {...register('checkboxAgree', validateConfigAgreeCheckbox())}
        className={classnameForInput(errors?.checkboxAgree)}
      />
      <span className="checkmark"> </span>
      <span> I agree to the processing of my personal information</span>
    </label>
  );
}

export default LabelRegCheckbox;
