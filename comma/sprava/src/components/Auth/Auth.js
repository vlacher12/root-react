import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Auth.scss';
import { connect } from 'react-redux';
import Link from '../Link';
import store from '../../store/store';
import showResults from './showResults';
import SimpleForm from './SimpleForm';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import Logo from '../Logo';


class Auth extends React.Component {

  render() {
    const { title } = this.props;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <Logo/>
          <p className={s.title}>{title}</p>


          <Provider store={store}>
            <div>
              <SimpleForm onSubmit={showResults} />
            </div>
          </Provider>
          <Link to={'/login/ResetPass'} className={s.outer}>
            <p className={s.forgotPass}>Забули пароль?</p>
          </Link>
        </div>
      </div>

    );
  }

}

export default withStyles(s)(Auth);
