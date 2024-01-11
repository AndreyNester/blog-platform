import { Spin } from 'antd';
import { useSelector } from 'react-redux';

import FormDecorator from '../../Components/FormDecorator/FormDecorator';
import FormEditProfile from '../../Components/FormEditProfile/FormEditProfile';
import './EditProfile.scss';

function EditProfile() {
  const signInLoading = useSelector((state) => state.reducers.editProfile.loading);
  return (
    <section className="editProfile">
      <FormDecorator title="Edit Profile">
        {signInLoading ? (
          <Spin tip="Loading" size="large">
            <FormEditProfile />
          </Spin>
        ) : (
          <FormEditProfile />
        )}
      </FormDecorator>
    </section>
  );
}

export default EditProfile;
