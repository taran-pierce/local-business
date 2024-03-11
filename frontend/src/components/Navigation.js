'use client'

import Link from 'next/link';

import { useMenu } from '../utils/useMenu';

import NavigationToggle from './NavigationToggle';

import styles from './navigation.module.scss';

export const mainLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Menu',
    href: '/menu',
  },
];

export default function Navigation() {
  const {
    isNavigationOpen,
    toggleNavigation,
  } = useMenu();

  return (
    <div
      className={styles.navigationWrapper}
    >
      <nav
        className={`${styles.navigation} ${isNavigationOpen ? styles.open : ''}`}
      >
        <ul>
          {mainLinks.map((link) => (
            <li
              key={link.name}
            >
              <Link
                href={link.href}
              >
              {link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
