/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { classnameForInput } from '../../FormDecorator/utils/classnameForInput';
import { validateConfigText } from '../validateConfigs/validateConfigTitle';

function LabelCreateArticleText(props) {
  const { errors, register } = props;
  return (
    <label>
      <h4>Text</h4>
      <textarea
        // type="text"
        placeholder="Text"
        id="textarea"
        {...register('editProfileText', validateConfigText())}
        className={classnameForInput(errors?.editProfileText, 'textField')}
      />
      <p>{errors.editProfileText?.message}</p>
    </label>
  );
}

export default LabelCreateArticleText;
