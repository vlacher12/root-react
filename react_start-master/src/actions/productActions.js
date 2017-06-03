import {GET_SELECT_PRODUCT} from '../constants/product';

export function selectArt(index){
	return (dispatch) => {
		dispatch({
			type: GET_SELECT_PRODUCT,
			payload: index
		});
	}
}