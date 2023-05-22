import styles from './Avatar.module.css';
import Image from 'next/image';

export function Avatar({hasBorder = true, src}) {
  return (
    <Image 
        className={hasBorder ? styles.avatarHasBorder : styles.avatar} 
        src={src} 
        alt=''
        width={48}
        height={48}
    />
  )
}
