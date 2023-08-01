import { useState, useEffect, useCallback } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import data from '@/data/CDM_data.json';
import DataDisplay from '@/components/DataDisplay/DataDisplay';
import DataTable from '@/components/DataTable/DataTable';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';

import { useSelector, useDispatch } from 'react-redux';
import { setSelectedId, setCDMData } from '../store/store';
import { selectCDMData, selectCDMId } from '@/store/selectors';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const selectedId = useSelector(selectCDMId);
  const CDMData = useSelector(selectCDMData);
  const dispatch = useDispatch();

  const handleInitialFetch = useCallback(async () => {
    setLoading(true);
    try {
      const response = data;
      dispatch(setCDMData(response));
    } catch (e) {
      setError('Fetch error');
    }
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    handleInitialFetch();
  }, [handleInitialFetch]);

  const handleClick = useCallback(
    (id: number) => {
      dispatch(setSelectedId(id));
    },
    [dispatch]
  );

  const selected = CDMData.find((data) => data.cdm_id === selectedId);

  // [] mobile layout as well
  // [] ReadME

  return (
    <>
      <Head>
        <title>Space Collision Avoidance</title>
        <meta name="description" content="Morpheus Space Collision Avoidance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles['main']} ${inter.className}`}>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {!loading && (
          <>
            <div className={styles['main-container']}>
              <BreadCrumb />
              <DataDisplay selected={selected} />
            </div>
            <div className={styles['data-table-container']}>
              <DataTable
                CDMData={CDMData}
                handleClick={handleClick}
                selectedId={selectedId}
              />
            </div>
          </>
        )}
      </main>
    </>
  );
}
