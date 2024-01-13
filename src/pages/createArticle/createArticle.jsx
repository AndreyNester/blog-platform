import FormCreateArticle from '../../Components/FormCreateArticle/FormCreateArticle';
import FormDecorator from '../../Components/FormDecorator/FormDecorator';
import './createArticle.scss';

function CreateArticle() {
  return (
    <section>
      <FormDecorator className="createArticle" title="Create new article">
        <FormCreateArticle />
      </FormDecorator>
    </section>
  );
}

export default CreateArticle;
