/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { classnameForInput } from '../../FormDecorator/utils/classnameForInput';
import { validateConfigUsername } from '../validateConfigs/validateConfigs';

function LabelRegUsername(props) {
  const { errors, register } = props;
  return (
    <label>
      <h4>Username</h4>
      <input
        type="text"
        placeholder="Username"
        className={classnameForInput(errors?.username)}
        {...register('username', validateConfigUsername())}
      />
      <p>{errors?.username?.message}</p>
    </label>
  );
}

export default LabelRegUsername;
