import { Alert, Button } from 'antd';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

import { actions as createArticleActions } from '../../store/createArticle/createArticle.slice';
import { fetchCreateArticle } from '../../store/createArticle/fetchCreateArticle';
import { actions as editArticleActions } from '../../store/editArticle/editArticle.slice';
import { fetchEditArticle } from '../../store/editArticle/fetchEditArticle';
// eslint-disable-next-line import/order
import TagsField from '../TagsField/TagsField';
import LabelCreateArticleText from './Labels/LabelCreateArticleText';
import LabelCreateArticleTitle from './Labels/LabelCreateArticleTitle';
import LabelCreaterArticleShortDescription from './Labels/LabelCreaterArticleShortDescription';

function FormCreateArticle(props) {
  const { item, params, successReq, errorReq } = props;

  const token = useSelector((state) => state.reducers.logIn.token);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      tags: item?.tagList.map((el) => ({ id: uniqid(), item: el })),
    },
  });

  useEffect(() => {
    if (successReq) {
      dispatch(editArticleActions.setSuccessReq());
    }
    return () => dispatch(editArticleActions.resetSuccessReq());
  }, []);

  useEffect(() => {
    if (successReq) {
      dispatch(editArticleActions.setSuccessReq());
    }
    return () => dispatch(createArticleActions.resetSuccessReq());
  }, []);

  const onSubmit = (data) => {
    if (params) {
      dispatch(fetchEditArticle({ ...data, token, params }));
    } else {
      dispatch(fetchCreateArticle({ ...data, token }));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {successReq ? <Alert message="Success operation" type="success" /> : null}
      {errorReq ? <Alert message="Some error was found" type="error" /> : null}
      <LabelCreateArticleTitle register={register} errors={errors} item={item} />
      <LabelCreaterArticleShortDescription register={register} errors={errors} item={item} />
      <LabelCreateArticleText register={register} errors={errors} item={item} />

      <TagsField register={register} errors={errors} control={control} item={item} />

      <Button type="primary" htmlType="submit" className="decorator__Btn">
        Send
      </Button>
    </form>
  );
}

export default FormCreateArticle;
