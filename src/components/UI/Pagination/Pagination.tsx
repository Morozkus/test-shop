import React from 'react'
import styles from './styles.module.css'

interface IPaginaton {
  currentPage: number;
  leftCondition: boolean;
  rightCondition: boolean;
  backCallBack: () => void;
  nextCallBack: () => void;
}

const Pagination = ({ backCallBack, currentPage, leftCondition, nextCallBack, rightCondition }: IPaginaton) => {
  return (
    <div className={styles.container}>
      {leftCondition && <button className={styles.prev} onClick={() => backCallBack()}>назад</button>}
      <h5 className={styles.currentPage}>{currentPage}</h5>
      {rightCondition && <button className={styles.prev} onClick={() => nextCallBack()}>вперед</button>}
    </div>
  )
}

export default Pagination