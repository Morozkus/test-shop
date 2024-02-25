import React, { useCallback, useEffect, useState } from 'react'
import styles from './appBoard.module.css'
import Card from '../UI/Card/Card'
import API from '../../api/API'
import { item } from '../../models/APIModel'

interface IAppBoard {
  ids: string[]
}

const AppBoard = ({ ids }: IAppBoard) => {

  const [cards, setCards] = useState<item[]>([])

  const fetchData = useCallback(async () => {
    try {
      const response = (await API.getItems({ ids })).result
      const withOutDobble = response.reduce<{ [id: string]: any }>((acc, cur) => {
        acc[cur.id] = cur
        return acc
      }, {})
      console.log(withOutDobble)
      setCards(Object.values(withOutDobble))
    } catch (error) {
      fetchData()
    }
  }, [ids])

  useEffect(() => {
    if (ids.length) {
      fetchData()
    }

  }, [fetchData, ids])

  return (
    <div className={styles.appBoard}>
      {cards.map((el) => <Card key={el.id} brand={el.brand} id={el.id} price={el.price} title={el.product} />)}
    </div>
  )
}

export default AppBoard