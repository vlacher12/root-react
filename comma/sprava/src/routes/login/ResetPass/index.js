
import React from 'react';
import Login from '../Login';
import ResetPass from '../../../components/AuthPages/ResetPass';


const title = 'Забули пароль?';

function action() {
  return {
    chunks: ['reset'],
    title,
    component: <Login>
      <ResetPass title={title} />
    </Login>,
  };
}

export default action;
