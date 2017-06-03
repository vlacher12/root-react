

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DescriptionProduct.scss';
import { connect } from "react-redux"; 
import { bindActionCreators } from 'redux';
import {selectMaterial} from '../../actions/materialsActions';
import Material from './Material';
import productDesc from "../../image/productDesc.png";


class DescriptionProducts extends React.Component {
  constructor(){
    super();
  }

  render(){
    let {selectedMaterial, listMaterials, selectbtn } = this.props;
    return (
      <div className={s.products}>
        <h2 className={s.title}>Каталог продукції</h2>
        <div className={s.items}>
          <div className={s.item}>
            <p className={s.name}>Внутрішнє та зовнішнє оздоблення</p>
           <div className={s.item_wrap}>
             <div className={s.materials}>
              <span className={s.parametr}>Вид каменю:</span>
              {listMaterials.map((elem, index) => 
                <Material keys={elem.key} 
                styles={s.material}
                key={index}
                selected={s.select} 
                name={elem.name}
                classNameId={selectedMaterial.classNameId} 
                selectbtn={selectbtn} />)}
            </div>
              <div className={s.photos}>
              {selectedMaterial.photos.map((photo, index) => (
                <img className={s.image} key={index} src={photo} />
              ))}
              </div>
            </div> 
           </div>
        </div>
        <div className={s.item}>
            <p className={s.name}>Складні архітектурні вироби</p>
            <div className={s.photo_wrap}>
              <img className={s.image} src={productDesc} />
            </div>
        </div>
        <div className={s.item}>
            <p className={s.name}>Садово-паркове мистецтво</p>
            <div className={s.photo_wrap}>
              <img className={s.image} src={productDesc} />
            </div>
        </div>
      </div>
      )
  }
}

function mapToStateProps(state){
  return {
    selectedMaterial: state.selectMaterial.selectedMaterial,
    listMaterials: state.selectMaterial.listMaterials
  }
}

function mapToActionProps(dispatch){
  return {
    selectbtn: bindActionCreators(selectMaterial,dispatch)
  }
}

export default withStyles(s)(connect(mapToStateProps, mapToActionProps)(DescriptionProducts));
