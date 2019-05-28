import React from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

export default function Button(props) {
  if (!props.children) { return <div/> }
  return (
    <button {...props} className={cn(styles.btn, props.cls)}>
      {props.children}
    </button>
  )
}
