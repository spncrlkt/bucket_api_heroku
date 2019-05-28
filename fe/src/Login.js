import React, {useState, useContext} from 'react'

import { Conn } from './App.js'
import Button from './Button.js'
import Input from './Input.js'

import styles from './Login.module.css'

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

  return <div className={styles.cntnr}>
    { curUser ? <div>
      <Button onClick={logOff}>
        logoff
      </Button>
    </div> : <div className={styles.form}>
      <Input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
        type="email"
        name="email"
        required
      />
      <Input
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder="pass"
        type="password"
        name="password"
        required
      />
      <div className={styles.button}>
        <Button onClick={submit}>
          login
        </Button>
      </div>
    </div> }
  </div>
}
