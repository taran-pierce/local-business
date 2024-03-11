import Logo from './Logo';
import Navigation from './Navigation';

import styles from './header.module.scss';

export default function Header() {
  return (
    <header
      className={styles.header}
    >
      <div className={styles.navigationWrapper}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
