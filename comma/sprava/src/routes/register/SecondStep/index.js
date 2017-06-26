
import React from 'react';
import Sign from '../Sign';
import SecondStep from '../../../components/SignUpPages/SecondStep';


const title = 'Придумайте новий пароль';

function action() {
  return {
    chunks: ['secondstep'],
    title,
    component: <Sign>
      <SecondStep title={title} />
    </Sign>,
  };
}

export default action;
