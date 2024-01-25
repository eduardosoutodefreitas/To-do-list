import Image from 'next/image';
import styles from './header.module.css';
import Greetings from './greetings';
import Date from './Date';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src={'/assets/logo.svg'}
        width={150}
        height={36}
        alt={'Focal point logo'}
      />

      <Greetings name="Marcus" />
      <Date />
    </header>
  );
};

export default Header;
