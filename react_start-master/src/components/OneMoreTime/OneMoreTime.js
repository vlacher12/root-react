/**
 * Created by Vladyslav on 6/2/2017.
 */
import React from 'react';

import s from "./OneMoreTime.scss";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link/Link';
import logo from './logo.png'

class Information extends React.Component {
    render() {
        return (
            <div className={s.root}>
                <div className={s.container}>
                    <h1 className={s.title}>Краще один раз подивитись</h1>
                    <p className={s.topic}>Фото проектів з нашого instagram.</p>
                    <div className={s.projects}>

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

export default withStyles(s)(Information);
