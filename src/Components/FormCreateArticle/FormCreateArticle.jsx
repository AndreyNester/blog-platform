import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCreateArticle } from '../../store/createArticle/fetchCreateArticle';
// eslint-disable-next-line import/order
import TagsField from '../TagsField/TagsField';
import LabelCreateArticleText from './Labels/LabelCreateArticleText';
import LabelCreateArticleTitle from './Labels/LabelCreateArticleTitle';
import LabelCreaterArticleShortDescription from './Labels/LabelCreaterArticleShortDescription';

function FormCreateArticle() {
  const token = useSelector((state) => state.reducers.logIn.token);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(fetchCreateArticle({ ...data, token }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelCreateArticleTitle register={register} errors={errors} />
      <LabelCreaterArticleShortDescription register={register} errors={errors} />
      <LabelCreateArticleText register={register} errors={errors} />

      <TagsField register={register} errors={errors} control={control} />

      <Button type="primary" htmlType="submit" className="decorator__Btn">
        Send
      </Button>
    </form>
  );
}

export default FormCreateArticle;
