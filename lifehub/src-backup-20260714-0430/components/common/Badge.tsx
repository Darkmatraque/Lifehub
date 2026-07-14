import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

export function Badge({ children, variant = 'primary', size = 'md', icon }: BadgeProps) {
  return (
    <span className={\\ \ \\}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  );
}
