/* eslint-disable jsx-a11y/label-has-associated-control */

/* eslint-disable react/jsx-props-no-spreading */
import { Button } from 'antd';
import { useFieldArray } from 'react-hook-form';

import TagsFieldItem from '../TagsFieldItem/TagsFieldItem';
import './TagsField.scss';

function TagsField(props) {
  // eslint-disable-next-line no-unused-vars
  const { register, errors, control, item } = props;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tags',
  });

  return fields.length ? (
    <ul className="createArticle__tagList">
      {fields.map((el, index) => (
        <TagsFieldItem
          key={el.id}
          register={register}
          errors={errors}
          index={index}
          remove={remove}
          append={append}
          data={el.item}
        />
      ))}
    </ul>
  ) : (
    <Button type="primary" className="createArticle__addTagBtn" ghost onClick={() => append({ tag: '' })}>
      Add tag
    </Button>
  );
}

export default TagsField;
