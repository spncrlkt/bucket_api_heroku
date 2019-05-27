import React, { useState } from 'react'

import { AnimationTimer } from 'animation-timer'
import { Easer } from 'functional-easing'
import * as ClrMth from 'color-math';

import styles from './Hdr.module.css'


/*
ALT cOLORS
color: #7CFC00;
color: #7FFF00;
color: #20C20E:
  color: #5CE905;

rainbow colors
#e91405 - red
#D98805 - orng
#cbe905 - ylw
#5CE905 - grn
#2305e9 - blu
#8F05DA - purp
#e905ce - mgnta
*/

const rnbwClrs = [
  '#e91405',
  '#D98805',
  '#cbe905',
  '#5CE905',
  '#2305e9',
  '#8F05DA',
  '#e905ce',
]

let idx = 0;
const revClr = () => {
  const clr = rnbwClrs[idx]
  idx = (idx + 1) % rnbwClrs.length
  return clr
}

function _dbl_clrs(clrs) {
  const newClrs = []
  let last = clrs[0]
  for (let clr in clrs) {
    if (clr === last) {
      continue
    } else {
      newClrs.push(last)
    }
    last = clr
  }
}

const _calc_clr_by_pct = (clrs, pc) => {
}

export default function Hdr() {
  const [clr, setClr] = useState('#5CE905')
  const mutClr = () => setClr(revClr())

  /*
  const easer = new Easer().using('in-cubic')
  const tmr = new AnimationTimer()
    .duration('5s')
    .on('tick', (pc) => console.log(pc))
    .play()
  */

  return <h1 onClick={mutClr} className={styles.h1} style={{'color':clr}}>
    WELCOME 2.... PIMPY'S MIND PALACE
  </h1>

}
