/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { classnameForInput } from '../../FormDecorator/utils/classnameForInput';
import { validateConfigEmail } from '../validateConfigs/validateConfigs';

function LabelEditProfileEmail(props) {
  const { errors, register } = props;
  return (
    <label>
      <h4>Email address</h4>
      <input
        type="email"
        {...register('editProfileEmail', validateConfigEmail())}
        className={classnameForInput(errors?.editProfileEmail)}
      />
      <p>{errors?.editProfileEmail?.message}</p>
    </label>
  );
}

export default LabelEditProfileEmail;
