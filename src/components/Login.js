import React, { useState } from 'react';
import './Login.css';

function Login(props) {

const [formData, setFormData] = useState({username: '', password:''})
const [pwd, setPwd] = useState('')

function handleChange(e) {
    setFormData({...formData, [e.target.name]: [e.target.value]})
}

function loginSubmit(){
// This function should pass 'admin' or 'employee' to App.js
    if (formData.username == 'admin' ){
        props.loginSwitch('admin')
    }
    else if (formData.username == 'lumper'){
        props.loginSwitch('lumper')
    }
    
}

  return (
        <div className='Login' style={{ display: 'flex',flexDirection: 'column' , justifyContent: 'center'}}>
            <h1>LoginDiv</h1>
            <form style={{display: 'flex',flexDirection: 'column' , justifyContent: 'center'}}>
                <label>User::</label>
                <input name='username' value={formData.username} onChange={handleChange} />
                <br />
                <label>Password::</label>
                <input name='password' value={formData.password} onChange={handleChange}/>
            </form>    
            <button name="LoginButton" onClick={loginSubmit}>Login</button>
      </div>

  )
}

export default Login