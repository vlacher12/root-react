import {GET_SELECT_PRODUCT} from '../constants/product';
import product1 from "../image/product1.png";
import product2 from "../image/product2.png";
import product3 from "../image/product3.png";
import product4 from "../image/product4.png";

const getInitialState = {
    productsAll: [{key: 1, name: "Внутрішнє та зовнішнє оздоблення"},
        {key: 2, name: "Складні архітектурні вироби"},
        {key: 3, name: "Садово-паркове мистецтво"}],
    descriptionProduct: {
        1: {
            param: [
                {
                    vid: "Портрети",
                    photo: product1
                },
                {
                    vid: "Скульптури",
                    photo: product2
                },
                {
                    vid: "Каміни",
                    photo: product3
                },
                {
                    vid: "Столешні",
                    photo: product4
                }
            ],
            classNameId: 1,
        },
        2: {
            param: [
                {
                    vid: "Скульптури",
                    photo: product2
                },
                {
                    vid: "Портрети",
                    photo: product1
                },
                {
                    vid: "Каміни",
                    photo: product3
                },
            ],
            classNameId: 2
        },
        3: {
            param: [
                {
                    vid: "Скульптури",
                    photo: product2
                },
                {
                    vid: "Портрети",
                    photo: product1
                },
                {
                    vid: "Каміни",
                    photo: product4
                },
                {
                    vid: "Портрети",
                    photo: product4
                },
            ],
            classNameId: 3
        }
    },
    selectedProduct: {
        param: [
            {
                vid: "Портрети",
                photo: product1
            },
            {
                vid: "Скульптури",
                photo: product2
            },
            {
                vid: "Каміни",
                photo: product3
            },
            {
                vid: "Столешні",
                photo: product4
            }
        ],
        classNameId: 1,
    }
}

export default function selectProduct(state=getInitialState, action){

    switch(action.type){
        case GET_SELECT_PRODUCT:
            return {
                ...state,
                selectedProduct: state.descriptionProduct[action.payload],
            }
    }
    console.log(state);
    return state;
}


