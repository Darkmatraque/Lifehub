import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.menuBtn} onClick={onMenuClick}>
          ☰
        </button>
        <h2 className={styles.pageTitle}>Bienvenue</h2>
      </div>

      <div className={styles.right}>
        <button className={styles.notificationBtn}>🔔</button>
        <button className={styles.profileBtn}>👤</button>
      </div>
    </header>
  );
}