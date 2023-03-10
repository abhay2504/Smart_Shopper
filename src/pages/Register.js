import React,{useEffect, useState} from 'react';
import NameAndType from '../components/NameAndType';
import  '../css/CssRegister.css';
import {comm} from '../Api/api';
import {useSelector , useDispatch} from 'react-redux';
import Loading from './Loading';
import {setLoading} from '../redux/action'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register(){

    const loader = useSelector((state) => state.loader )
    const dispatch = useDispatch();

    const [showLoginLink,setShowLoginLink] = useState(false);


    function enableLink(){
     
        setTimeout( () => {
            setShowLoginLink(true);
        },1000)
    }

  

const [registerData, setRegisterData] = useState({
    username:'',
    password:'',
    firstName:'',
    fastName:'',
})

const onChangeHandler = (e) => {
    if(e.target.id === 'Email'){
        setRegisterData({
            ...registerData,
            username : e.target.value,
             })

    }else if(e.target.id === 'Password'){
        setRegisterData({
            ...registerData,
            password : e.target.value,
             })
    }else if(e.target.id === 'FirstName'){
        setRegisterData({
            ...registerData,
            firstName : e.target.value,
             })
    }else if(e.target.id === 'LastName'){
        setRegisterData({
            ...registerData,
            lastName : e.target.value,
             })
    }

}

const registerUser = () => {
    console.log(registerData);

    dispatch(setLoading())
    comm.userRegister(registerData,dispatch,showToastSuccessMessage,showToastErrorMessage,enableLink);
    

}

const showToastSuccessMessage = () => {
    toast.success('Success Notification !. User Registered', {
        position: toast.POSITION.TOP_RIGHT
    });
};
const showToastErrorMessage = () => {
    toast.error('Something went wrong!. Try Again', {
        position: toast.POSITION.TOP_RIGHT
    });
};


    return(
        <div className='Register-Container'>
            
          {  
            loader ? <Loading/> : null
         }  
           
            <div className='Form-Container'>
            <div>
                <h1>Register Here</h1>
            </div>
               <NameAndType label={'Email'} id={'Email'} type={'email'} placeholder={'Enter Email'} value={registerData.username} onChange={onChangeHandler}/>
               <NameAndType label={'Password'} id={'Password'} type={'password'} placeholder={'Enter Password'} value={registerData.password} onChange={onChangeHandler}/>
               <NameAndType label={'Firstname'} id={'FirstName'} type={'text'} placeholder={'Enter FirstName'} value={registerData.firstName} onChange={onChangeHandler}/>
               <NameAndType label={'LastName'} id={'LastName'} type={'text'} placeholder={'Enter LastName'} value={registerData.lastName} onChange={onChangeHandler}/>
              
               <div style={{margin:'2em'}}>
               <button onClick={() => {registerUser()}}>Register</button>

               
              </div>

              <div>
                  {
                      showLoginLink ? (<a href='http://localhost:3000/Login'>Login</a>) : (null)
                  }
                 
              </div>

            </div>

           <ToastContainer/>

        </div>
    )
}

export default Register;