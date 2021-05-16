import Head from 'next/head';

import styles from './layout.module.css';

import Footer from '../footer/footer';

export default function Layout({ children, title = '' }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <title>{title ? `${title} - Blog` : 'Blog'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
