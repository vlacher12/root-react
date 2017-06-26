import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SecondStep.scss';
import { connect } from 'react-redux';
import Link from '../../Link';
import UserAction from '../../../actions/userAction';
import store from './store';
import showResults from './showResults';
import SimpleForm from './SimpleForm';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';


const src = 'http://savepic.ru/14574409.png';
class SecondStep extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <img className={s.photo} src={src}/>

          <Provider store={store}>
            <div>
              <SimpleForm onSubmit={showResults} />
            </div>
          </Provider>
          <Link to={'/register/FinalStep'} className={s.outer}>
            <p className={s.skip}>Пропустити</p>
          </Link>

        </div>
      </div>

    );
  }

}

export default withStyles(s)(SecondStep);
