/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button } from 'antd';

import { validateConfigTag } from '../FormCreateArticle/validateConfigs/validateConfigTitle';
import { classnameForInput } from '../FormDecorator/utils/classnameForInput';

function TagsFieldItem(props) {
  const { item, register, errors, index, append, remove } = props;
  return (
    <li key={item.id}>
      <label>
        <input
          {...register(`tags.${index}.tag`, validateConfigTag())}
          className={classnameForInput(errors?.tags?.[index])}
        />
        <Button type="primary" className="createArticle__deleteBtn" danger ghost onClick={() => remove(index)}>
          Delete
        </Button>
        <Button type="primary" className="createArticle__AddTagBtn" ghost onClick={() => append()}>
          Add tag
        </Button>
      </label>
      {errors?.tags?.[index] ? <p className="errorMessage">{errors.tags?.[index].tag.message}</p> : null}
    </li>
  );
}

export default TagsFieldItem;
