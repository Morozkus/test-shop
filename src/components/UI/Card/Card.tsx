import React from 'react'
import styles from './card.module.css'

export interface ICard {
  id: string;
  title: string;
  brand: null | string;
  price: number;
}

const Card = ({ brand, id, price, title }: ICard) => {
  return (
    <div className={styles.card}>


      <img src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" alt='card img' className={styles.img} />


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