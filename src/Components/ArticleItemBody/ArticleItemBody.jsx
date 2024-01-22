import Markdown from 'markdown-to-jsx';

import './ArticleItemBody.scss';

function ArticleItemBody(props) {
  const {
    item: { body },
  } = props;
  return (
    <div className="articleItem__body">
      <Markdown>{body}</Markdown>
    </div>
  );
}

export default ArticleItemBody;
