import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './global/style.css'
import styles from './global/app.module.css'
import API from './api/API';
import AppBoard from './components/AppBoard/AppBoard';
import Pagination from './components/UI/Pagination/Pagination';
import Filter from './components/Filter/Filter';

function App() {

  const [sortType, setSortType] = useState<'all' | 'fields'>('all')

  const [currentIds, setCurrentIds] = useState<string[]>([])

  const [limit] = useState(50)
  const [page, setPage] = useState(0)
  const offset = useMemo(() => limit * page, [limit, page])

  const fetchData = useCallback(async (limit: number, offset: number) => {
    const response = (await API.getIds({ limit: limit + 1, offset })).result
    if (response.length) {
      setCurrentIds(response)
    }
  }, [])

  const prev = () => {
    setPage(page => page - 1)
  }

  const next = () => {
    setPage(page => page + 1)
  }

  useEffect(() => {
    if (sortType === 'all') {
      fetchData(limit, offset)
    }

  }, [fetchData, limit, offset, sortType])
  console.log(currentIds.length, offset, offset + limit + 1)

  return (
    <div className={styles.container}>
      <Filter changeFilter={(type) => setSortType(type)} setIds={setCurrentIds} setPage={setPage} />
      <Pagination backCallBack={prev} currentPage={page + 1} leftCondition={page !== 0} nextCallBack={next} rightCondition={sortType === 'fields' ? currentIds.length > limit + offset + 1 : currentIds.length > limit} />
      <AppBoard ids={sortType === 'fields' ? currentIds.slice(offset, offset + limit + 1) : currentIds.slice(0, limit)} />
      <Pagination backCallBack={prev} currentPage={page + 1} leftCondition={page !== 0} nextCallBack={next} rightCondition={sortType === 'fields' ? currentIds.length > limit + offset + 1 : currentIds.length > limit} />
    </div>
  );
}

export default App;
