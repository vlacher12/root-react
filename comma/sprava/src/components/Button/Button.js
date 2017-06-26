import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Button.scss';

class Button extends React.Component {

  render() {
    return (
      <div>
        <button className={s.button}>{this.props.children}</button>
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Button);
