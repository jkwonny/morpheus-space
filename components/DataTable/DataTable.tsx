import styles from '@/styles/DataTable.module.css';
import { CDMDataProps } from '@/types/CDMData';
import MDIcon from '../../public/MD_icon.png';
import Image from 'next/image';

type DataTableProps = {
  CDMData: CDMDataProps[];
  handleClick: (index: number) => void;
  selectedId: number | null;
};

export default function DataTable({
  CDMData,
  handleClick,
  selectedId,
}: DataTableProps) {
  return (
    <table className={styles['table-container']}>
      <caption className={styles['table-container__title']}>
        Conjunction Data Messages
      </caption>
      <thead>
        <tr className={styles['table-container__tablehead']}>
          <th className={styles['table-container__header']}>PC</th>
          <th className={styles['table-container__header']}>MD</th>
          <th className={styles['table-container__header']}>CDM ID</th>
          <th className={styles['table-container__header']}>TCA</th>
        </tr>
      </thead>
      <tbody>
        {CDMData &&
          CDMData.map((data) => {
            return (
              <tr
                key={data.cdm_id}
                className={`${
                  selectedId === data.cdm_id
                    ? styles['row--selected']
                    : styles['row']
                }`}
                onClick={() => handleClick(data.cdm_id)}
              >
                <td className={styles['row-item']}>{data.PC}</td>
                <td className={styles['row-item']}>
                  <Image src={MDIcon} height={16} width={16} alt="md_icon" />
                  {data.MD}km
                </td>
                <td className={styles['row-item']}>{data.cdm_id}</td>
                <td className={styles['row-item']}>{data.tca}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
