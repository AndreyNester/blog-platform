/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { classnameForInput } from '../../FormDecorator/utils/classnameForInput';
import { validateConfigPassword } from '../validateConfigs/validateConfigs';

function LabelSignInPassword(props) {
  const { errors, register } = props;
  return (
    <label>
      <h4>Password</h4>
      <input
        type="password"
        placeholder="Password"
        {...register('password', validateConfigPassword())}
        className={classnameForInput(errors?.password)}
      />
      <p>{errors?.password?.message}</p>
    </label>
  );
}

export default LabelSignInPassword;
