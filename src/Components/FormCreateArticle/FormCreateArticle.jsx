import { Button } from 'antd';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line import/order
import TagsField from '../TagsField/TagsField';
import LabelCreateArticleText from './Labels/LabelCreateArticleText';
import LabelCreateArticleTitle from './Labels/LabelCreateArticleTitle';
import LabelCreaterArticleShortDescription from './Labels/LabelCreaterArticleShortDescription';

function FormCreateArticle() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
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
