/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable react/jsx-props-no-spreading */
import { Button } from 'antd';
import { useFieldArray } from 'react-hook-form';

import TagsFieldItem from '../TagsFieldItem/TagsFieldItem';
import './TagsField.scss';

function TagsField(props) {
  // eslint-disable-next-line no-unused-vars
  const { register, errors, control } = props;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'test',
  });

  return fields.length ? (
    <ul className="createArticle__tagList">
      {fields.map((item, index) => (
        <TagsFieldItem
          key={item.id}
          item={item}
          register={register}
          errors={errors}
          index={index}
          remove={remove}
          append={append}
        />
      ))}
    </ul>
  ) : (
    <Button type="primary" className="createArticle__AddTagBtn" ghost onClick={() => append({ tag: '' })}>
      Add tag
    </Button>
  );
}

export default TagsField;
