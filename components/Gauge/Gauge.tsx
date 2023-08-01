import styles from '@/styles/Gauge.module.css';

type GaugeProps = {
  value: number;
  type: 'PC' | 'MD';
};

export default function Gauge({ value, type }: GaugeProps) {
  const UPPER_BOUND = type === 'PC' ? Math.pow(10, -3) : 3;
  const LOWER_BOUND = type === 'PC' ? Math.pow(10, -7) : 0;
  console.log('value', value);
  const percent = ((value - LOWER_BOUND) / (UPPER_BOUND - LOWER_BOUND)) * 100;

  console.log('percent', percent);

  return (
    <div className={styles['container']}>
      <div className={styles['spectrum']}>
        <div
          className={styles['spectrum-ticker']}
          style={{ left: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
