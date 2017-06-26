
import React from 'react';
import Layout from '../../components/Layout';
import Login from './Login';
import Auth from '../../components/Auth/Auth';

const title = 'Увійдіть до мережі COMMA';


function action() {
  return {
    chunks: ['login'],
    title,
    component: <Layout>
      <Login>
        <Auth title={title}/>
      </Login>
    </Layout>,
  };
}

export default action;
