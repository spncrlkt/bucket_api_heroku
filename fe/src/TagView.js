import React, { useState } from 'react'

import EmojiPicker from 'emoji-picker-react'

import Button from './Button.js'
import Input from './Input.js'

export default function TagView() {
  const [emoji, setEmoji] = useState(null)
  const [title, setTitle] = useState('')
  const [alts, setAlts] = useState('')

  const handleClick = (codePt, epObj) => {
    setAlts(epObj.name.replace(/_/g,' '))
    const fmtCodePt = `0x${codePt}`
    setEmoji(String.fromCodePoint(fmtCodePt))
  }

  // const submit = () => 


  return <div>
    { emoji && <div>
      <div style={{'margin-bottom': '20px'}}>
        <Button style={{'margin-right': '20px'}}>
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
      <div style={{'margin-bottom': '20px'}}>
        <Button>
          save
        </Button>
      </div>
    </div> }
    <EmojiPicker onEmojiClick={handleClick}/>
  </div>
}
