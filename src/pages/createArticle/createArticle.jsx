import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import FormCreateArticle from '../../Components/FormCreateArticle/FormCreateArticle';
import FormDecorator from '../../Components/FormDecorator/FormDecorator';
import './createArticle.scss';

function CreateArticle() {
  const createArticleLoading = useSelector((state) => state.reducers.createArticle.loading);
  const successReq = useSelector((state) => state.reducers.createArticle.successReq);
  const errorReq = useSelector((state) => state.reducers.createArticle.errorReq);

  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(createArticleLoading);
  }, [createArticleLoading]);

  return (
    <section>
      <FormDecorator className="createArticle" title="Create new article">
        <Spin tip="Loading" size="large" spinning={loading}>
          <FormCreateArticle successReq={successReq} errorReq={errorReq} />
        </Spin>
      </FormDecorator>
    </section>
  );
}

export default CreateArticle;
