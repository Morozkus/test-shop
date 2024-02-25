import React from 'react'
import styles from './styles.module.css'

interface IButton {
  text: string;
  onClick: () => void
}

const Button = ({ text, onClick }: IButton) => {
  return (
    <button className={styles.button} onClick={onClick}>{text}</button>
  )
}

export default Button