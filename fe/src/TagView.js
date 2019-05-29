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
  const [tags, setTags] = useState(null)

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
    api.post('/phrag/tag/add', {
      emoji,
      title,
      alts,
    }).then(res => {
      setTitle('')
      setAlts('')
      setEmoji(null)
    })
  }

  const fetch = () => {
    api.get('/phrag/tag').then(res => setTags(res.data.tags))
  }

  return <div>
    <div style={{'marginBottom': '20px'}}>
      {tags && tags.map(t => {
        return <Button style={{'marginRight': '20px'}}>
          {t.emoji}
        </Button>
      })}
    </div>
    <div style={{'marginBottom': '20px'}}>
      <Button onClick={fetch}>
        fetch
      </Button>
    </div>
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
        <Button onClick={submit}>
          save
        </Button>
      </div>
    </div> }
    <EmojiPicker onEmojiClick={handleClick}/>
  </div>
}
