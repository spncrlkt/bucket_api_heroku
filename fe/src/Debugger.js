import React, {useState} from 'react'

import Register from './Register.js';

export default function Debugger(props) {
  const [dbg, setDbg] = useState(false)

  return <div>
    <h2 onClick={() => setDbg(!dbg)}>DEBUGGER MODE</h2>
    { dbg && <div>
        <p>App Level Render Count (RC): {props.dbgRC}</p>
        <Register />
        <pre>{JSON.stringify(props.appState, null, 2)}</pre>
      </div> }
    </div>
}

