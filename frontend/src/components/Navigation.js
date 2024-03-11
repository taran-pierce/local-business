import Link from 'next/link';

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
  return (
    <nav
      className={styles.navigation}
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
  );
}
