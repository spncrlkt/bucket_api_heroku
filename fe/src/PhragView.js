import React, { useContext } from 'react'

import { Conn } from './App.js'

import PhragList from './PhragList.js';
import MutPhrag from './MutPhrag.js';
import NewPhrag from './NewPhrag.js';

// APP STYLES NOTE
import styles from './App.module.css'

export default function PhragView() {
  const {
    select,
  } = useContext(Conn)

  return <div>
    <div className={styles.window}>
      <div className={styles.left}>
        <NewPhrag />
        <PhragList />
      </div>
      <div className={styles.right}>
        <MutPhrag selPhrag={select.selPhrag()}/>
      </div>
    </div>
  </div>
}
