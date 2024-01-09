import FormDecorator from '../../Components/FormDecorator/FormDecorator';
import FormEditProfile from '../../Components/FormEditProfile/FormEditProfile';
import './EditProfile.scss';

function EditProfile() {
  return (
    <section className="editProfile">
      <FormDecorator title="Edit Profile">
        <FormEditProfile />
      </FormDecorator>
    </section>
  );
}

export default EditProfile;
