import { SET_LOADING , UNSET_LOADING} from "./type"

const setLoading = () =>{
    return{
        type:SET_LOADING,
        payLoad: true,
    }
   
}

const unsetLoading = () =>{
    return{
        type:UNSET_LOADING,
        payLoad: false,
    }
   
}

export {setLoading,unsetLoading}