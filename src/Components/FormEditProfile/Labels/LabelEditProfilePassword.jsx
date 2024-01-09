/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { classnameForInput } from '../../FormDecorator/utils/classnameForInput';
import { validateConfigPassword } from '../validateConfigs/validateConfigs';

function LabelEditProfilePassword(props) {
  const { errors, register } = props;
  return (
    <label>
      <h4>New password</h4>
      <input
        type="password"
        {...register('editProfilePassword', validateConfigPassword())}
        className={classnameForInput(errors?.editProfilePassword)}
      />
      <p>{errors?.editProfilePassword?.message}</p>
    </label>
  );
}

export default LabelEditProfilePassword;
