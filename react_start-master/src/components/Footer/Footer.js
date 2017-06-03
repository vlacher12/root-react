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
import s from './Footer.scss';
import Link from '../Link';
import map from './map.png'
class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
            <div className={s.Map}>
                <img className={s.map} src={map}/>
            </div>
            <div className={s.contact}>
                <div className={s.about}>
                    <div className={s.head}>

                        <div className={s.info}>
                            <h1 className={s.mainTitle}>Контакти</h1>
                            <Link to={'/'}> <p className={s.phoneNumber}>+38 066 445 59 00</p></Link>
                            <p className={s.address}>м. Мукачево, вул. Переяславська, 1</p>
                        </div>
                    </div>
                    <div className={s.nav}>
                        <NumberList numbers={numbers} />

                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li className={s.listItems} key={number.toString()}>
            <a className={s.text}>{number}</a>
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = ['Каталог продукції', 'Про нас', 'Наші роботи'];

export default withStyles(s)(Footer);
