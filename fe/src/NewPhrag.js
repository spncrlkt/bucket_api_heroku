import React, {useState, useContext} from 'react';

import { Conn } from './App.js';

export default function MutPhrag(props) {
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


  return <div>
    <input
      value={text}
      onChange={e => setText(e.target.value)}
      placeholder="write something"
      type="text"
      name="text"
      required
    />
    <button onClick={submit}>
      add
    </button>
  </div>
}

