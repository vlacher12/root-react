
import React from 'react';
import Layout from '../../components/Layout';
import Sign from './Sign';
import SignUp from '../../components/SignUp/SignUp';

const title = 'Вітаємо на COMMA!';


function action() {
  return {
    chunks: ['signup'],
    title,
    component: <Layout>
      <Sign>
        <SignUp title={title}/>
      </Sign>
    </Layout>,
  };
}

export default action;
