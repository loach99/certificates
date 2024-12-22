import React, { useEffect, useState } from 'react';
import styles from './styles/App.module.css';
import Filter from '../Filter/Filter';
import useGetGoodList from '../../hooks/useGetGoodList';
import CertificateList from '../CertificateList/CertificateList';
import { ICertificate } from '../../interfaces/interfaces';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
function App() {
  const { data, loading, error } = useGetGoodList();
  const [filterArr, setFilterArr] = useState<string[]>([]);
  const [certificates, setCertificates] = useState<ICertificate[]>(data);

  useEffect(() => {
    setCertificates(data)
  }, [data])
  const certificateFilter = () => {
    setCertificates(data.filter((item) => {
      if (filterArr.length === 0) {
        return true
      }
      if (filterArr.includes(item.ID)) {
        return true
      }
    }))
  }
  useEffect(() => {
    certificateFilter()
  }, [filterArr])
  const handleChexboxChange = (id: string) => {
    setFilterArr((prevSelectedIds) => {
      if (prevSelectedIds.includes(id)) {
        return prevSelectedIds.filter((item) => item !== id);
      }
      return [...prevSelectedIds, id];
    });
  }
  console.log(filterArr)
  return (
    <div className={styles.app}>
      {loading && <Loader />}
      {error ? <Modal text='Мы пытаемся все починить!'>
        <span>Произошла ошибка при получении данных</span></Modal> :
        <>
          <Filter setFilterArr={setFilterArr} handleChexboxChange={handleChexboxChange} goodList={data} />
          <CertificateList goodList={certificates} />
        </>
      }
    </div>
  );
}

export default App;