/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable react/jsx-props-no-spreading */
import { classnameForInput } from '../../FormDecorator/utils/classnameForInput';
import { validateConfigUsername } from '../validateConfigs/validateConfigs';

function LabelEditProfileUsername(props) {
  const { errors, register } = props;
  return (
    <label>
      <h4>Username</h4>
      <input
        type="text"
        placeholder="Username"
        {...register('editProfileUsername', validateConfigUsername())}
        className={classnameForInput(errors?.editProfileUsername)}
      />
      <p>{errors?.editProfileUsername?.message}</p>
    </label>
  );
}

export default LabelEditProfileUsername;
