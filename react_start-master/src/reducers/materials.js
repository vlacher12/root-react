import {SELECT_MATERIAL} from '../constants/product';
import material1 from "../image/material1.png";
import material2 from "../image/material2.png";
import material3 from "../image/material3.png";
import material4 from "../image/material4.png";
import material5 from "../image/material5.png";

const getInitialState = {
	listMaterials: [{key: 1, name: "мармур"}, 
				{key: 2, name: "граніт"},
				{key: 3, name: "пісковик"},
				{key: 4, name: "вапняк"},
				{key: 5, name: "квацит"},
				{key: 6, name: "онікс"},],

	optionsMaterials: {
		1: {
			photos: [material1],
			classNameId: 1,
		},
		2: {
			photos: [material2],
			classNameId: 2,
		},
		3: {
			photos: [material4],
			classNameId: 3,
		},
		4: {
			photos: [material5],
			classNameId: 4,
		},
		5: {
			photos: [material3],
			classNameId: 5,
		},
		6: {
			photos: [material1],
			classNameId: 6,
		},
	},
	selectedMaterial: {
		photos: [material1],
		classNameId: 1,
	}
}

export default function selectMaterial(state=getInitialState, action){

	switch(action.type){
		case SELECT_MATERIAL:
			return {
				...state,
				selectedMaterial: state.optionsMaterials[action.payload],
			}
	}
	console.log(state);
	return state;
}