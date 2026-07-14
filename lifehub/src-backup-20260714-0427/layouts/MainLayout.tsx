import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/layout/Sidebar';
import { Header } from '../components/layout/Header';
import styles from './MainLayout.module.css';

export function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={styles.layout}>
      <Sidebar isOpen={sidebarOpen} />
      <div className={styles.main}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
