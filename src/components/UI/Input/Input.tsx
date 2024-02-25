import React from 'react'
import styles from './styles.module.css'

interface IInput {
  value: string | number;
  onChange: (str: string) => void
  placeholder?: string
}

const Input = ({ onChange, value, placeholder }: IInput) => {
  return (
    <input placeholder={placeholder} className={styles.input} type="text" onChange={(e) => onChange(e.target.value)} value={value} />
  )
}

export default Input