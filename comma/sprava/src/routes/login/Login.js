import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.scss';


class Login extends React.Component {
  render() {
    return (
      <div className={s.root}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(s)(Login);
