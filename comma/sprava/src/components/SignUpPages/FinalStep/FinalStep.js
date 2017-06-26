import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FinalStep.scss';
import { connect } from 'react-redux';
import Link from '../../Link';
import UserAction from '../../../actions/userAction';
import store from './store';
import showResults from './showResults';
import SimpleForm from './SimpleForm';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';


const src = 'http://savepic.ru/14575425.png';
class SecondStep extends React.Component {

  render() {
    const { title } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <img className={s.check} src={src}/>
          <p className={s.title}>{title}</p>
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

export default withStyles(s)(SecondStep);
