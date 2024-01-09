/* eslint-disable react/jsx-props-no-spreading */
import { classnameForInput } from '../../FormDecorator/utils/classnameForInput';
import { validateConfigAvatar } from '../validateConfigs/validateConfigs';

/* eslint-disable jsx-a11y/label-has-associated-control */
function LabelEditProfileAvatar(props) {
  const { errors, register } = props;
  return (
    <label>
      <h4>Avatar image (url)</h4>
      <input
        type="url"
        {...register('editProfileAvatar', validateConfigAvatar())}
        className={classnameForInput(errors?.editProfileAvatar)}
      />
      <p>{errors.editProfileAvatar?.message}</p>
    </label>
  );
}

export default LabelEditProfileAvatar;
