
import React from 'react';
import Login from '../Login';
import CreatePass from '../../../components/AuthPages/CreatePass';


const title = 'Придумайте новий пароль';

function action() {
  return {
    chunks: ['create'],
    title,
    component: <Login>
      <CreatePass title={title} />
    </Login>,
  };
}

export default action;
