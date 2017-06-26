import React from 'react';
import { Field, reduxForm } from 'redux-form';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './CreatePass.scss';
const SimpleForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field className={s.input}
            name="password"
            component="input"
            type="text"
            placeholder="Пароль"
          />
        </div>
      </div>
      <div>
        <div>
          <Field className={s.input}
            name="confirmation"
            component="input"
            type="text"
            placeholder="Підтвердити пароль"
          />
        </div>
      </div>


      <div>
        <button className={s.authButton} type="submit" disabled={pristine || submitting}>Зберегти</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);
