import React from 'react';
import { connect } from "react-redux"; 
import { bindActionCreators } from 'redux';
import {selectArt} from '../../actions/productActions';
import Product from './product';
import s from "./products.scss";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../Link/Link';

class Products extends React.Component {
	constructor(){
		super();
	}

	render(){
		let {productsAll, selectedProduct, selectbtn } = this.props;
		return (
			<div className={s.products}>
				<h2 className={s.title}>Каталог продукції</h2>
				<div className={s.items}>
					<div className={s.all}>
						<div>
							{productsAll.map((elem, index) => 
								<Product keys={elem.key} 
								styles={s.item}
								key={index}
								selected={s.select} 
								name={elem.name}
								classNameId={selectedProduct.classNameId} 
								selectbtn={selectbtn} />)}
						</div>
						<Link to="/catalog" className={s.btn}>Каталог продукції</Link>
					</div>
					{selectedProduct.param.map((elem, index) => (
						<div key={index}>
							<img className={s.image} src={elem.photo} />
							<div className={s.wrap}>
								<span className={s.element}>{elem.vid}</span>
							</div>
						</div>))}
				</div>
			</div>
			)
	}
}

function mapToStateProps(state){
	return {
		selectedProduct: state.selectProduct.selectedProduct,
		productsAll: state.selectProduct.productsAll
	}
}

function mapToActionProps(dispatch){
	return {
		selectbtn: bindActionCreators(selectArt,dispatch)
	}
}

export default withStyles(s)(connect(mapToStateProps, mapToActionProps)(Products));
