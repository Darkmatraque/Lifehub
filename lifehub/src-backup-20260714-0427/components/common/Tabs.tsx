import React, { useState } from 'react';
import styles from './Tabs.module.css';

interface TabProps {
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactElement<TabProps>[];
  defaultTab?: number;
}

export function Tabs({ children, defaultTab = 0 }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList}>
        {children.map((tab, index) => (
          <button
            key={index}
            className={\\ \\}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {children[activeTab].props.children}
      </div>
    </div>
  );
}

export function Tab({ children }: TabProps) {
  return <>{children}</>;
}
