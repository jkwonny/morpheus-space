import React from 'react';
import styles from '@/styles/DataDisplay.module.css';
import { CDMDataProps } from '@/types/CDMData';
import Gauge from '../Gauge/Gauge';

export default function DataDisplayComponent({
  selected,
}: {
  selected: CDMDataProps | undefined;
}) {
  return (
    <>
      {!selected && (
        <div className={styles['container--empty']}>
          <span>Select a CDM, to display data</span>
        </div>
      )}
      {selected && (
        <div className={styles['content-container']}>
          <div className={styles['content']}>
            <div className={styles['content-container__title']}>
              <div>
                <span className={styles['title--bold']}>CDM </span>
                <span className={styles['title']}>{selected.cdm_id}</span>
              </div>
            </div>

            <div className={styles['container']}>
              <span className={styles['container-subtitle']}>
                Time of closest approach
              </span>
              <span className={styles['description']}>{selected.tca}</span>
            </div>

            <div className={styles['bottom-container']}>
              <div className={styles['container']}>
                <span className={styles['container-subtitle']}>
                  Probability of collision:
                </span>
                <div className={styles['pc-container']}>
                  <span className={styles['description']}>{selected.PC}</span>
                </div>
                <Gauge value={selected.PC} type="PC" />
              </div>
              <div className={styles['container']}>
                <span className={styles['container-subtitle']}>
                  Miss distance (Total):
                </span>
                <div className={styles['description-container']}>
                  <span className={styles['description']}>{selected.MD}km</span>
                </div>
                <Gauge value={selected.MD} type="MD" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
