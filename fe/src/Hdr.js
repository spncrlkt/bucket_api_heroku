import React, { useState, useEffect } from 'react'

import { AnimationTimer } from 'animation-timer'
import { Easer } from 'functional-easing'
import * as ClrMth from 'color-math';

import styles from './Hdr.module.css'

const rnbwClrs = _split_clrs(_split_clrs(_split_clrs([
  '#5CE905',
  '#2305e9',
  '#8F05DA',
  '#e905ce',
  '#e91405',
  '#D98805',
  '#cbe905',
  '#5CE905',
])))

function _split_clrs(clrs) {
  const newClrs = []
  const first = clrs[0]
  let last = clrs[0]
  for (let clr of clrs) {
    if (clr === last) {
      continue
    } else {
      newClrs.push(last)
      newClrs.push(ClrMth.evaluate(`${last} | ${clr}`).result.hex())
    }
    last = clr
  }
  newClrs.push(ClrMth.evaluate(`${last} | ${first}`).result.hex())
  return newClrs
}

function _copy_clrs(clrs) {
  return [...clrs, ...clrs]
}

const _test_clrs = (clrs) => _copy_clrs(_copy_clrs(clrs))

const clrs = _test_clrs(rnbwClrs)

const _calc_clr_by_pct = (pc) => {
  const numClrs = clrs.length
  const idx = Math.floor(pc * (numClrs-1))
  return clrs[idx];
}

export default function Hdr(props) {
  const [error, setError] = useState(null)
  const [tick, setTick] = useState(0)

  const easer = new Easer().using('in-out-bounce')
  const tmr = new AnimationTimer()
    .duration('2s')
    .on('tick', (pc) => setTick(pc))

  const stop = .4;
  const run_len = .55;

  const ping = (tmr) => {
    tmr.play()
    props.ping().then(res => {
      tmr.play()
    }).catch(err => {
      setError('~:< SERVER"S DOWN BICTH GO 2 SLEEP >:~')
      props.onPingFail()
    })

  }

  return <div>
    { error && <h1 className={styles.err}>{error} </h1>}
    <h1 onClick={() => ping(tmr)} className={styles.h1}>
      <ColoredLetters clrs={clrs} tick={tick} stop={stop} run_len={run_len}>
        WELCOME 2.... PIMPY'S MIND PALACE
      </ColoredLetters>
    </h1>
  </div>
}


function ColoredLetters(props) {
  const [ltrs, setLtrs] = useState(props.children.split(''))
  const numLtrs = ltrs.length

  const getLtr = (ltr, idx, tick) => {
    const start_t = (props.stop / numLtrs) * idx
    const t_run = tick - start_t
    let color = props.clrs[0]
    if (t_run > 0 && t_run < props.run_len) {
      // find adj pct
      color = _calc_clr_by_pct(t_run / props.run_len)
    } else if (t_run >= props.run_len) {
      color = props.clrs[props.clrs.length - 1]
    }
    return <span key={idx} style={{'color': color}}>
      {ltr}
    </span>
  }
  return <span>
    {ltrs && ltrs.map((ltr, idx) => getLtr(ltr, idx, props.tick))}
  </span>
}
