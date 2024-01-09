/* eslint-disable import/order */
import { Button } from 'antd';
import { useForm } from 'react-hook-form';

import LabelEditProfileAvatar from './Labels/LabelEditProfileAvatar';
import LabelEditProfileEmail from './Labels/LabelEditProfileEmail';
import LabelEditProfilePassword from './Labels/LabelEditProfilePassword';
import LabelEditProfileUsername from './Labels/LabelEditProfileUsername';

function FormEditProfile() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelEditProfileUsername register={register} errors={errors} />
      <LabelEditProfileEmail register={register} errors={errors} />
      <LabelEditProfilePassword register={register} errors={errors} />
      <LabelEditProfileAvatar register={register} errors={errors} />

      <Button type="primary" htmlType="submit" className="decorator__Btn">
        Save
      </Button>
    </form>
  );
}

export default FormEditProfile;
