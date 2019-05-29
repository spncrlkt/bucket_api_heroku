import React, {useState} from 'react';

import axios from 'axios';

import Button from './Button.js'
import Input from './Input.js'

export default function Register() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const submit = () =>
    axios.post('/auth/register', {email, password:pass}).then(res => console.log(res))

  return <div>
    <p>Register</p>
    <Input
      value={email}
      onChange={e => setEmail(e.target.value)}
      placeholder="Email address"
      type="email"
      name="email"
      required
    />
    <Input
      value={pass}
      onChange={e => setPass(e.target.value)}
      placeholder="Password"
      type="password"
      name="password"
      required
    />
    <Button type="submit" onClick={submit}>
      reg
    </Button>
  </div>
}
