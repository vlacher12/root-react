import {GET_SELECT_PRODUCT} from '../constants/product';
import project1 from "../image/project1.png";
import project2 from "../image/project2.png";
import project3 from "../image/project3.png";
import project4 from "../image/project4.png";
import project5 from "../image/project5.png";
import project6 from "../image/project6.png";

const getInitialState = {
    selectedProject: {
        param: [
            {
                vid: "#onyx #m-selection",
                photo: project1
            },
            {
                vid: "#onyx #m-selection",
                photo: project2
            },
            {
                vid: "#onyx #m-selection",
                photo: project3
            },
            {
                vid: "#onyx #m-selection",
                photo: project4
            },
            {
                vid: "#onyx #m-selection",
                photo: project5
            },
            {
                vid: "#onyx #m-selection",
                photo: project6
            }
        ],
        classNameId: 1,
    }
}

export default function selectproject(state=getInitialState, action){

    switch(action.type){
        case GET_SELECT_PROJECT:
            return {
                ...state,
                selectedProject: state.descriptionProject[action.payload],
            }
    }
    console.log(state);
    return state;
}


