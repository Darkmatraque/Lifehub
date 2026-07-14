import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  color?: 'blue' | 'green' | 'red' | 'yellow' | 'purple';
  showPercentage?: boolean;
}

export function ProgressBar({
  value,
  max = 100,
  label,
  color = 'blue',
  showPercentage = true,
}: ProgressBarProps) {
  const percentage = (value / max) * 100;

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.bar}>
        <div
          className={\\ \\}
          style={{ width: \\%\ }}
        />
      </div>
      {showPercentage && <span className={styles.percentage}>\%</span>}
    </div>
  );
}
