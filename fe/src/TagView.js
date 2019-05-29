import React, { useState, useContext } from 'react'

import EmojiPicker from 'emoji-picker-react'

import { Conn } from './App.js';

import Button from './Button.js'
import Input from './Input.js'

export default function TagView() {
  const {
    api,
  } = useContext(Conn)

  const [emoji, setEmoji] = useState(null)
  const [title, setTitle] = useState('')
  const [alts, setAlts] = useState('')

  const handleClick = (codePt, epObj) => {
    setAlts(epObj.name.replace(/_/g,' '))
    const fmtCodePt = `0x${codePt}`
    try {
      setEmoji(String.fromCodePoint(fmtCodePt))
    } catch {
      // FLAGS??????????? AND WHAT ELSE??
      console.error('WTF WTF WFT WFT')
    }
  }

  const submit = () => {
    api.post('/phrags/tags/add', {
      emoji,
      title,
      alts,
    }).then(res => console.log(res))
  }


  return <div>
    { emoji && <div>
      <div style={{'marginBottom': '20px'}}>
        <Button style={{'marginRight': '20px'}}>
          <span>
            {emoji}
          </span>
        </Button>
        <Input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='add a title'
          type="input"
        />
        <Input
          value={alts}
          onChange={e => setAlts(e.target.value)}
          type="input"
        />
      </div>
      <div style={{'marginBottom': '20px'}}>
        <Button>
          save
        </Button>
      </div>
    </div> }
    <EmojiPicker onEmojiClick={handleClick}/>
  </div>
}
