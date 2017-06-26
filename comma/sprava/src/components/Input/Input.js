import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Input.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div>
        <input className={s.input} type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.props.children} />
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Input);
