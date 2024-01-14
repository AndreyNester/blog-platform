import { Spin } from 'antd';
import { useSelector } from 'react-redux';

import FormCreateArticle from '../../Components/FormCreateArticle/FormCreateArticle';
import FormDecorator from '../../Components/FormDecorator/FormDecorator';
import './createArticle.scss';

function CreateArticle() {
  const loading = useSelector((state) => state.reducers.createArticle.loading);
  const successReq = useSelector((state) => state.reducers.createArticle.successReq);
  const errorReq = useSelector((state) => state.reducers.createArticle.errorReq);

  return (
    <section>
      <FormDecorator className="createArticle" title="Create new article">
        {loading ? (
          <Spin tip="Loading" size="large">
            <FormCreateArticle successReq={successReq} errorReq={errorReq} />
          </Spin>
        ) : (
          <FormCreateArticle successReq={successReq} errorReq={errorReq} />
        )}
      </FormDecorator>
    </section>
  );
}

export default CreateArticle;
