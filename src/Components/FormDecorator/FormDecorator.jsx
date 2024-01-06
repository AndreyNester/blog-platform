import classNames from 'classnames';

import './FormDecorator.scss';

function FormDecorator(props) {
  const { className, children, title } = props;
  const classnameForDecorator = classNames({
    formDecorator__block: true,
    [className]: true,
  });

  return (
    <div className="formDecorator">
      <div className="formDecorator__container">
        <div className={classnameForDecorator}>
          <h3 className="formDecorator__title">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}

export default FormDecorator;
