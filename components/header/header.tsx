import Image from 'next/image';

import headerStyles from './header.module.css';
import utilStyles from '../../styles/utils.module.css';

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  return (
    <header className={headerStyles.header}>
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt={name}
      />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
    </header>
  );
}
