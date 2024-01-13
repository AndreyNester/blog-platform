/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable react/jsx-props-no-spreading */
import { classnameForInput } from '../../FormDecorator/utils/classnameForInput';
import { validateConfigShortDescription } from '../validateConfigs/validateConfigTitle';

function LabelCreaterArticleShortDescription(props) {
  const { errors, register } = props;
  return (
    <label>
      <h4>Short description</h4>
      <input
        type="text"
        placeholder="Short description"
        {...register('editProfileShortDescription', validateConfigShortDescription())}
        className={classnameForInput(errors?.editProfileShortDescription)}
      />
      <p>{errors.editProfileShortDescription?.message}</p>
    </label>
  );
}

export default LabelCreaterArticleShortDescription;
