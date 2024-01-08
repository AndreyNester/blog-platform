/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { classnameForInput } from '../../FormDecorator/utils/classnameForInput';
import { validateConfigPassword } from '../validateConfigs/validateConfigs';

function LabelRegPassword(props) {
  const { errors, register } = props;
  return (
    <label>
      <h4>Password</h4>
      <input
        type="password"
        placeholder="Password"
        className={classnameForInput(errors?.password)}
        {...register('password', validateConfigPassword())}
      />
      <p>{errors?.password?.message}</p>
    </label>
  );
}

export default LabelRegPassword;
