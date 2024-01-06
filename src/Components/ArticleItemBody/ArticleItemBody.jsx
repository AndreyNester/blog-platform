import Markdown from 'markdown-to-jsx';

import './ArticleItemBody.scss';

function ArticleItemBody(props) {
  const {
    item: { body },
  } = props;
  console.log(body);
  return (
    <div className="articleItemBody">
      <Markdown>{body}</Markdown>
    </div>
  );
}

export default ArticleItemBody;
