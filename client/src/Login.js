import React, { useState } from 'react';
import Axios from 'axios';

function Login() {
    const [rolesList, setroleList] = useState([]);
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [date_of_birth, setDate] = useState('');

    const getRoles = () => {
        Axios.get('http://localhost:3000/users').then((response) => {
            setroleList(response.data);
        });
    };
    
    const addUsers = () => {
        Axios.post('http://localhost:3000/create', {
            username,
            password,
            email,
            date_of_birth
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error("Error adding user:", error);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUsers();
    };

    return (
        <div className='App container'>
            <h1>Employee Information</h1>
            <div className='information'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type='text' className='form-control' placeholder='Enter name' onChange={(event)=>{
                            setName(event.target.value)
                        }} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type='password' className='form-control' placeholder='Enter password'  onChange={(event)=>{
                            setPassword(event.target.value)
                        }}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type='email' className='form-control' placeholder='Enter email' onChange={(event)=>{
                            setEmail(event.target.value)}} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Date:</label>
                        <input type='date' className='form-control' onChange={(event)=>{
                            setDate(event.target.value)}} />
                    </div>

                    <button type='submit' className='btn btn-success' onSubmit={handleSubmit} >Register</button>
                </form>
            </div>
            <hr/>
            <div className='roles'>
                <button className='btn btn-primary' onClick={getRoles}>Show roles</button>
                {rolesList.map((val, key) => (
                    <div className='roles card' key={key}> 
                        <div className='employee card'>
                            <p className='card-text'>Role: {val.role_name}</p> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Login;
