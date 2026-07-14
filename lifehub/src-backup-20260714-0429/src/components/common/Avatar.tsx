import React from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export function Avatar({ src, alt = 'Avatar', initials, size = 'md', color = '#6366f1' }: AvatarProps) {
  return (
    <div
      className={\\ \\}
      style={!src ? { backgroundColor: color } : {}}
    >
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <span className={styles.initials}>{initials}</span>
      )}
    </div>
  );
}
