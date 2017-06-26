
import React from 'react';
import Sign from '../Sign';
import FinalStep from '../../../components/SignUpPages/FinalStep';


const title = 'Тепер ви зареєстровані в COMMA';

function action() {
  return {
    chunks: ['finalstep'],
    title,
    component: <Sign>
      <FinalStep title={title} />
    </Sign>,
  };
}

export default action;
