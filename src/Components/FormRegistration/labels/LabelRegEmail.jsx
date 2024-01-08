/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { classnameForInput } from '../../FormDecorator/utils/classnameForInput';
import { validateConfigEmail } from '../validateConfigs/validateConfigs';

function LabelRegEmail(props) {
  const { errors, register } = props;
  return (
    <label>
      <h4>Email address</h4>
      <input
        type="email"
        placeholder="Email address"
        className={classnameForInput(errors?.email)}
        {...register('email', validateConfigEmail())}
      />
      <p>{errors?.email?.message}</p>
    </label>
  );
}

export default LabelRegEmail;
