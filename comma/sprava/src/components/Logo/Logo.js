import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Logo.scss';

const logo = 'http://savepic.ru/14587840.png';

class Logo extends React.Component {

  render() {
    return (
      <img className={s.logo} src={logo}/>
    );
  }
}

export default withStyles(normalizeCss, s)(Logo);
