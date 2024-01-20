import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';

import FormCreateArticle from '../../Components/FormCreateArticle/FormCreateArticle';
import FormDecorator from '../../Components/FormDecorator/FormDecorator';
import './EditArticle.scss';

function EditArticle() {
  const FormEditArticle = FormCreateArticle; // Меняем название компонента для удобства
  const params = useParams();
  const editArticleLoading = useSelector((state) => state.reducers.editArticle.loading);
  const successReq = useSelector((state) => state.reducers.editArticle.successReq);
  const errorReq = useSelector((state) => state.reducers.editArticle.errorReq);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(editArticleLoading);
  }, [editArticleLoading]);

  const {
    state: { item },
  } = useLocation();

  return (
    <section className="editArticle">
      <FormDecorator className="createArticle" title="Edit article">
        <Spin tip="Loading" size="large" spinning={loading}>
          <FormEditArticle item={item} params={params} successReq={successReq} errorReq={errorReq} />
        </Spin>
      </FormDecorator>
    </section>
  );
}

export default EditArticle;
