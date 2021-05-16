import Image from 'next/image';

import styles from './footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Shantanu Dutta. All Rights Reserved.</p>
      </footer>
    </>
  );
}
