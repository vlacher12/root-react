import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SignUp.scss';
import { connect } from 'react-redux';
import UserAction from '../../actions/userAction';
import store from './store';
import showResults from './showResults';
import SimpleForm from './SimpleForm';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import Logo from '../Logo';


class SignUp extends React.Component {

  render() {
    const { title } = this.props;

    return (
      <div className={s.root}>
        <div className={s.container}>
          <Logo/>
          <p className={s.title}>{title}</p>
          <p className={s.topic}>Додайте контактну інформацію, щоб розпочати роботу.</p>
          <Provider store={store}>
            <div>
              <SimpleForm onSubmit={showResults} />
            </div>
          </Provider>

        </div>
      </div>

    );
  }

}

export default withStyles(s)(SignUp);
