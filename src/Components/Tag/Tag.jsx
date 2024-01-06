import './Tag.scss';

function Tag(props) {
  const { value } = props;

  return <li className="tag">{value}</li>;
}

export default Tag;
