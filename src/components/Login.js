import React, { useState } from 'react';
import './Login.css';

function Login() {

const [formData, setFormData] = useState({username: '', password:''})

function handleChange(e) {
    const thing = e.target.name
    setFormData({...formData, [e.target.name]: [e.target.value]})
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
            <button>Login</button>
      </div>

  )
}

export default Login