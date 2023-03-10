import React,{useState} from 'react';
import NameAndType from '../components/NameAndType';
import '../css/CssLogin.css';

function Login(){

   const [loginData, setLoginData] = useState({
        username:'',
        Password:'',
    })

    const onChangeHandler = (e) => {
        if(e.target.id === 'Email'){
            setLoginData({
                ...loginData,
                username : e.target.value,
            })

        }else if(e.target.id === 'Password'){
            setLoginData({
                ...loginData,
                Password : e.target.value,
        })
    }
    }

    const loginUser = () => {
        console.log(loginData);
    }
    
    
    return(
        <div className='Login-Container'>
            <div className='Form2-Container'>
                 <div>
                    <h1>Login Here</h1>
                </div>
                    
                <NameAndType label={'Email'} id={'Email'} type={'email'} placeholder={'Enter Email'} value={loginData.username} onChange={onChangeHandler}/>
               <NameAndType label={'Password'} id={'Password'} type={'password'} placeholder={'Enter Password'} value={loginData.Password} onChange={onChangeHandler}/>

               <div style={{margin:'2em'}}>
               <button onClick={() => {loginUser()}}>Login</button>
              </div>

             </div>
        </div>

    )
  
}

export default Login;