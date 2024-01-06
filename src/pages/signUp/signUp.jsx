import FormDecorator from '../../Components/FormDecorator/FormDecorator';
import FormRegistration from '../../Components/FormRegistration/FormRegistration';
import './signUp.scss';

function SignUp() {
  return (
    <section className="signUp">
      <FormDecorator title="Create new account">
        <FormRegistration />
      </FormDecorator>
    </section>
  );
}

export default SignUp;
