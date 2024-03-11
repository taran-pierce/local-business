'use client'

import Logo from './Logo';
import Navigation from './Navigation';
import NavigationToggle from './NavigationToggle';
import { useMenu } from '../utils/useMenu';

import styles from './header.module.scss';

export default function Header() {
  const { 
    isNavigationOpen,
    toggleNavigation,
  } = useMenu();

  return (
    <header
      className={styles.header}
    >
      <div className={styles.navigationWrapper}>
        <Logo />
        <NavigationToggle
          toggleNavigation={toggleNavigation}
          isNavigationOpen={isNavigationOpen}
        />
        <Navigation />
      </div>
    </header>
  );
}
