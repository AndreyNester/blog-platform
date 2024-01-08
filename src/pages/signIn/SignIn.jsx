import FormDecorator from '../../Components/FormDecorator/FormDecorator';
import FormSignIn from '../../Components/FormSignIn/FormSignIn';
import './SignIn.scss';

function SignIn() {
  return (
    <section className="signIn">
      <FormDecorator title="Sign In">
        <FormSignIn />
      </FormDecorator>
    </section>
  );
}

export default SignIn;
