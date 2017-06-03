/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feedback.scss';

class Feedback extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h2 className={s.title}>Виготовимо наступний шедевр разом</h2>
          <p className={s.text}>Зв’яжіться з нами та дізнайтесь більше</p>
          <form className={s.form} action="#">
              <input className={s.name} placeholder="Ім’я" type="text"></input>
              <input className={s.tel} placeholder="Телефон" type="text"></input>
              <input className={s.mail} placeholder="E-mail" type="email"></input>
              <textarea type="text" placeholder="Ваша ідея або питання" className={s.quetions}></textarea>
              <button className={s.submit}>Зв’язатись</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Feedback);
