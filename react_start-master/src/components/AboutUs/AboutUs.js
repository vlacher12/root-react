/**
 * Created by Vladyslav on 6/2/2017.
 */
import React from 'react';

import s from "./AboutUs.scss";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link/Link';
import aboutPic from './aboutPic.png'

class AboutUs extends React.Component {
    render() {
        return (
            <div className={s.root}>
                <div className={s.container}>
                    <div className={s.image}>
                        <img className={s.aboutPic} src={aboutPic}/>
                    </div>
                    <div className={s.topic}>
                        <h2 className={s.title}>Про нас</h2>
                        <div className={s.text}>
                            <p className={s.article}>Майстерня – це місце, де ваша ідея реалізовується з натурального каменю.
                                Вже більше 5 років ми створюємо унікальні дизайн-проекти для приватних і громадських інтер'єрів.
                            </p>
                            <p className={s.article}>
                                Ми пропонуємо різні варіанти співпраці, серед яких створення дизайн-проектів будь-якої складності, їх авторський супровід та повна реалізація, художнє оформлення інтер'єрів, а також їх доставку та послуги монтування.
                            </p>
                            <p className={s.article}>Найважливіше для нас – ваше естетичне задоволення, тож ми гарантуємо якість нашої роботи та дотримання термінів виконання.</p>
                        </div>
                        <div className={s.btn}>
                            <NumberList className={s.list} numbers={numbers} />
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

const numbers = ['Детальніше', 'Переглянути роботи'];


export default withStyles(s)(AboutUs);
