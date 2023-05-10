import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg';
import Image from 'next/image';

export function Header() {
  return (
    <header className={styles.header}>
      <Image src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  )
}
