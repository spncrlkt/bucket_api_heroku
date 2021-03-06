import React, {useState, useContext} from 'react'

import { Conn } from './App.js'
import Button from './Button.js'
import Input from './Input.js'

import styles from './NewPhrag.module.css'

export default function NewPhrag(props) {
  const {
    api,
  } = useContext(Conn)

  const initText = ''
  const [text, setText] = useState(initText)
  const [inflite, setInflite] = useState(false)

  const submit = () => {
    setInflite(true)
    api.post('/phrag/add', {
      text,
    }).then((res) => {
      setInflite(false)
      setText(initText)
      api.fetchPhrags()
    })
  }


  return <div className={styles.flx}>
    <Input
      value={text}
      onChange={e => setText(e.target.value)}
      type="text"
      name="text"
      required
    />
    <Button onClick={submit}>
      { inflite ? 'loading...' : 'add' }
    </Button>
  </div>
}

