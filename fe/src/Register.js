import React, {useState} from 'react';

import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const submit = () =>
    axios.post('/auth/register', {email, password:pass}).then(res => console.log(res))

  return <div>
    <p>Register</p>
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
      Register
    </button>
  </div>
}
