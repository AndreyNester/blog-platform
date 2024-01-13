/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { classnameForInput } from '../../FormDecorator/utils/classnameForInput';
import { validateConfigTitle } from '../validateConfigs/validateConfigTitle';

function LabelCreateArticleTitle(props) {
  const { errors, register } = props;
  return (
    <label>
      <h4>Title</h4>
      <input
        type="text"
        placeholder="Title"
        {...register('editProfileTitle', validateConfigTitle())}
        className={classnameForInput(errors?.editProfileTitle)}
      />
      <p>{errors.editProfileTitle?.message}</p>
    </label>
  );
}

export default LabelCreateArticleTitle;
