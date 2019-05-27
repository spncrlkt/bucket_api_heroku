import React, {useState, useEffect, useContext} from 'react';

import { Conn } from './App.js';

export default function MutPhrag(props) {
  const {
    api,
  } = useContext(Conn)

  const [text, setText] = useState('')
  const [id, setId] = useState(null)
  useEffect(() => {
    if (props.selPhrag) {
      setText(props.selPhrag.text)
      setId(props.selPhrag.id)
    }
  }, [props.selPhrag])
  const [isEditing, setIsEditing] = useState(false)

  const submit = () => api.post('/phrag/update', {
    text,
    id,
  }).then((res) => {
    setText(text)
    api.fetchPhrags().then(() => setIsEditing(false))
  })


  return <div>
    { isEditing ? <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="write something"
        type="text"
        name="text"
        required
      />
      <button onClick={submit}>
        update
      </button>
    </div> : <div>
      {text}
    </div> }
    <button onClick={() => setIsEditing(!isEditing)}>
      is edit
    </button>

  </div>
}
