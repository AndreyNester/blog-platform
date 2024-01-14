import { Spin } from 'antd';
import { useSelector } from 'react-redux';

import FormCreateArticle from '../../Components/FormCreateArticle/FormCreateArticle';
import FormDecorator from '../../Components/FormDecorator/FormDecorator';
import './createArticle.scss';

function CreateArticle() {
  const createArticleLoading = useSelector((state) => state.reducers.createArticle.loading);
  return (
    <section>
      <FormDecorator className="createArticle" title="Create new article">
        {createArticleLoading ? (
          <Spin tip="Loading" size="large">
            <FormCreateArticle />
          </Spin>
        ) : (
          <FormCreateArticle />
        )}
      </FormDecorator>
    </section>
  );
}

export default CreateArticle;
