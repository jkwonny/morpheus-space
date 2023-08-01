import styles from '@/styles/BreadCrumb.module.css';
import Image from 'next/image';

export default function BreadCrumb() {
  return (
    <div className={styles['breadcrumb-container']}>
      <span className={styles['breadcrumb--bold']}>Operations</span>
      <Image src={'/rightArrow.png'} alt="right_arrow" width={8} height={16} />
      <span className={styles['breadcrumb']}>Terran-1 & XELN4-6A</span>
    </div>
  );
}
