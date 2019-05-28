import React from 'react'
import styles from './Button.module.css';

export default function Button(props) {
  if (!props.children) { return <div/> }
  return (
    <button onClick={props.onClick} className={styles.myButton}>
      {props.children}
    </button>
  )
}
