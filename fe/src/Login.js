import React, {useState, useEffect, useContext} from 'react';

import axios from 'axios';
import { AppDispatch } from './App.js';
import { aTypes } from './state.js';


export default function Login(props) {
  const dispatch = useContext(AppDispatch)

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const submit = () => axios.post('/auth/login', {
    email,
    password: pass,
  }).then(res => dispatch({
    type: aTypes.AUTH_LOGIN,
    data: res.data.auth_token,
  }))

  return <div>
    <p>Login</p>
    <input
      value={email}
      onChange={e => setEmail(e.target.value)}
      placeholder="Email address"
      type="email"
      name="email"
      required
    />
    <input
      value={pass}
      onChange={e => setPass(e.target.value)}
      placeholder="Password"
      type="password"
      name="password"
      required
    />
    <button type="submit" onClick={submit}>
      Login
    </button>
  </div>
}
