/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { classnameForInput } from '../../FormDecorator/utils/classnameForInput';
import { validateConfigEmail } from '../validateConfigs/validateConfigs';

function LabelSignInEmail(props) {
  const { errors, register } = props;
  return (
    <label>
      <h4>Email address</h4>
      <input
        type="email"
        placeholder="Email address"
        {...register('email', validateConfigEmail())}
        className={classnameForInput(errors?.email)}
      />

      <p>{errors?.Email?.message}</p>
    </label>
  );
}

export default LabelSignInEmail;
