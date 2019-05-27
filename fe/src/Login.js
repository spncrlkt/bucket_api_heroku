import React, {useState, useContext} from 'react';

import { Conn } from './App.js';


export default function Login() {
  const {
    api,
    acts,
    select,
  } = useContext(Conn)

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const submit = () => api.post('/auth/login', {
    email,
    password: pass,
  }).then(res => acts.auth_login(res.data.auth_token, res.data.user.email))
  const logOff = () => acts.auth_logoff()
  const curUser = select.curEmail();

  return <div>
    { curUser ? <div>
      <button onClick={logOff}>
        Log off
      </button>
    </div> : <div>
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
      <button onClick={submit}>
        Login
      </button>
    </div> }
  </div>
}
