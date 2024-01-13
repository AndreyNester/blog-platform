import classNames from 'classnames';

import './FormDecorator.scss';

function FormDecorator(props) {
  const { className, children, title } = props;
  const classnameForDecorator = classNames({
    formDecorator: true,
    [className]: true,
  });

  return (
    <div className={classnameForDecorator}>
      <div className="formDecorator__container">
        <div className="formDecorator__block">
          <h3 className="formDecorator__title">{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
}

export default FormDecorator;
