import React from 'react'
import styles from './card.module.css'
import img from './../../../img/noImg.jpg'

export interface ICard {
  id: string;
  title: string;
  brand: null | string;
  price: number;
}

const Card = ({ brand, id, price, title }: ICard) => {
  return (
    <div className={styles.card}>


      <img src={img} alt='card img' className={styles.img} />


      <div className={styles.cardWrapper}>
        <div className={styles.productInfoWrapper}>
          <p className={styles.productId}>{id}</p>
          <h2 className={styles.productTitle}>{title}</h2>
        </div>

        <div className={styles.otherInfoWrapper}>
          <p className={styles.priceInfo}>Цена: {price}руб.</p>
          {brand && <p className={styles.brandInfo}>Бренд: {brand}</p>}
        </div>
      </div>


    </div>
  )
}

export default Card