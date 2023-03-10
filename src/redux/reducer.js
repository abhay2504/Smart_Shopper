import { SET_LOADING,UNSET_LOADING } from "./type"


const intialState = {

    loader : false,



}

const reducer = (state = intialState,action) => {

    switch(action.type){

        case SET_LOADING : {
            return{
                ...state,
                loader:action.payLoad,
            }
        }
        

        case UNSET_LOADING : {
            return{
                ...state,
                loader:action.payLoad,
            }
        }

        default :{
            return{
                ...state
            }
        }


    }

}

export {reducer};