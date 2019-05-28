import React, {useState, useContext} from 'react';

import { Conn } from './App.js';

import styles from './NewPhrag.module.css'

export default function NewPhrag(props) {
  const {
    api,
  } = useContext(Conn)

  const initText = ''
  const [text, setText] = useState(initText)

  const submit = () => api.post('/phrag/add', {
    text,
  }).then((res) => {
    setText(initText)
    api.fetchPhrags()
  })


  return <div className={styles.flx}>
    <input
      value={text}
      onChange={e => setText(e.target.value)}
      className={styles.input}
      placeholder="write something"
      type="text"
      name="text"
      required
    />
    <button onClick={submit} className={styles.button}>
      add
    </button>
  </div>
}

