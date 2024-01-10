import Markdown from 'markdown-to-jsx';

import './ArticleItemBody.scss';

function ArticleItemBody(props) {
  const {
    item: { body },
  } = props;
  return (
    <div className="articleItemBody">
      <Markdown>{body}</Markdown>
    </div>
  );
}

export default ArticleItemBody;
