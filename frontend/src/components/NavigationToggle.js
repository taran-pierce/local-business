'use client'

import styles from './navigationToggle.module.scss';

export default function NavigationToggle({
  toggleNavigation,
  isNavigationOpen,
}) {
  return (
    <button
      type="button"
      onClick={toggleNavigation}
      className={`button ${styles.menuButton} ${isNavigationOpen ? styles.open : ''}`}
    >
      Menu
    </button>
  );
}
