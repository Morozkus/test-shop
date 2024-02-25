import React, { useState } from 'react'
import styles from './styles.module.css'
import API from '../../api/API';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

interface IFilter {
  changeFilter: (type: 'all' | 'fields') => void
  setIds: (arr: string[]) => void
  setPage: (page: number) => void
}

export interface fields {
  product: string;
  price: number | null;
  brand: string;
}

const Filter = ({ changeFilter, setIds, setPage }: IFilter) => {
  const [sortSettings, setSortSettings] = useState<fields>({
    brand: '',
    price: null,
    product: ''
  })

  const fetchFilterData = async () => (await API.filter({ brand: sortSettings.brand, price: sortSettings.price || undefined, product: sortSettings.product })).result

  const handleSave = async () => {
    if (sortSettings.brand || sortSettings.price || sortSettings.product) {
      const response = await fetchFilterData()
      setIds(response)
      setPage(0)
      changeFilter('fields')
    }
  }

  const handleReset = () => {
    setSortSettings({
      brand: '',
      price: null,
      product: ''
    })
    setIds([])
    setPage(0)
    changeFilter('all')
  }

  return (
    <div className={styles.container}>
      <Input placeholder='Название товара' value={sortSettings.product} onChange={(e) => setSortSettings({ ...sortSettings, product: e })} />
      <Input placeholder='Цена' value={Number(sortSettings.price)} onChange={(e) => setSortSettings({ ...sortSettings, price: Number(e) })} />
      <Input placeholder='Бренд' value={sortSettings.brand} onChange={(e) => setSortSettings({ ...sortSettings, brand: e })} />

      <Button onClick={handleSave} text='Применить' />
      <Button onClick={handleReset} text='Сбросить' />
    </div>
  )
}

export default Filter