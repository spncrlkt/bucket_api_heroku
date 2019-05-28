import React, {useState, useEffect, useContext} from 'react'

import { Conn } from './App.js'
import Button from './Button.js'
import Input from './Input.js'
import styles from './MutPhrag.module.css'

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
      <Input
        value={text}
        onChange={e => setText(e.target.value)}
        type="text"
        name="text"
        required
      />
      <Button onClick={submit}>
        update
      </Button>
    </div> : <div onClick={() => setIsEditing(!isEditing)}>
      {text}
    </div> }
    { isEditing && <div className={styles.btn}>
      <Button onClick={() => setIsEditing(!isEditing)}>
        back
      </Button>
    </div> }

  </div>
}
