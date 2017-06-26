import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ResetPass.scss';
import { connect } from 'react-redux';
import Link from '../../Link';
import UserAction from '../../../actions/userAction';
import store from './store';
import showResults from './showResults';
import SimpleForm from './SimpleForm';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import Logo from '../../Logo';


class ResetPass extends React.Component {

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
          <Link to={'/login'} className={s.outer}>
            <p className={s.forgotPass}>Увійти в систему</p>
          </Link>
        </div>
      </div>

    );
  }

}

export default withStyles(s)(ResetPass);
