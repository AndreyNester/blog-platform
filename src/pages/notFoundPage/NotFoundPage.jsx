import FormDecorator from '../../Components/FormDecorator/FormDecorator';
import NotFoundPageContent from '../../Components/NotFoundPageContent/NotFoundPageContent';

function NotFoundPage() {
  return (
    <section className="notFoundPage">
      <FormDecorator title="not found">
        <NotFoundPageContent />
      </FormDecorator>
    </section>
  );
}

export default NotFoundPage;
