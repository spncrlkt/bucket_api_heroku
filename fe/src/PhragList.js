import React, { useContext } from 'react';

import { Conn } from './App.js';

export default function PhragList() {
  const {
    acts,
    select
  } = useContext(Conn)

  return <div>
    <div>
      {select.allPhrags().map((p) =>
        <div onClick={() => acts.phr_select(p.id)} key={p.id}>
          <span style={{'cursor':'pointer'}}>{p.text}</span>
        </div>)
      }
    </div>
  </div>
}
