/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { classnameForInput } from '../../FormDecorator/utils/classnameForInput';
import { validateConfigRepeatPassword } from '../validateConfigs/validateConfigs';

function LabelRepeatPassword(props) {
  const { errors, register, getValues } = props;
  return (
    <label>
      <h4>Repeaet Password</h4>
      <input
        type="password"
        placeholder="Password"
        className={classnameForInput(errors?.repeatPassword)}
        {...register('repeatPassword', validateConfigRepeatPassword(getValues))}
      />
      <p>{errors?.repeatPassword?.message || (errors?.repeatPassword && 'Password must match')}</p>
    </label>
  );
}

export default LabelRepeatPassword;
