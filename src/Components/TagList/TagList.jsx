/* eslint-disable no-param-reassign */
import classNames from 'classnames';
import uniqid from 'uniqid';

import Tag from '../Tag/Tag';
import './TagList.scss';

function TagList(props) {
  const { tagList: list, className } = props;
  const newList = list.map((el) => ({
    name: el,
    id: uniqid(),
  }));

  const classNameForTagList = classNames({
    tagList: true,
    [className]: true,
  });

  return (
    <ul className={classNameForTagList}>
      {newList.map((tag) => (
        <Tag value={tag.name} key={tag.id} />
      ))}
    </ul>
  );
}

export default TagList;
