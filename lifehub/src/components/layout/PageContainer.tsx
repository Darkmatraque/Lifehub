import styles from './PageContainer.module.css';

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main className={styles.pageContainer}>
      {children}
    </main>
  );
}