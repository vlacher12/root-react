import React from 'react';
import { Field, reduxForm } from 'redux-form';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Auth.scss';
const SimpleForm = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <Field className={s.input}
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
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
        <button className={s.authButton} type="submit" disabled={pristine || submitting}>Увійти</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);
