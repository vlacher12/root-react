import React from 'react';

export default class Products extends React.Component {
  constructor(){
    super();
  }

  onClickBtn(key, e){
    this.props.selectbtn(key);
  }

  render(){
    let { selectbtn, name, keys, styles, selected, classNameId} = this.props;
    return (
        <p 
        className={classNameId == keys ? styles + " " + selected : styles} 
        key={keys} 
        onClick={this.onClickBtn.bind(this,keys)}>
        {name}</p>
      )
  }
}
