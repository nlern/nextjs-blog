import Head from 'next/head';
import Link from 'next/link';

import Header from '../header/header';
import Footer from '../footer/footer';

import layoutStyles from './layout.module.css';

const name = 'Shantanu';
export const siteTitle = `${name}'s Blog`;

interface LayoutProps {
  children: any;
  title: string;
  home?: boolean;
}

export default function Layout({ children, home, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{home ? siteTitle : `${title} - ${siteTitle}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header name={name} />
      <div className={layoutStyles.container}>
        {!home && (
          <div className={layoutStyles.backToHome}>
            <Link href="/" passHref>
              <a href="/">← Back to home</a>
            </Link>
          </div>
        )}
        <main className={layoutStyles.content}>{children}</main>
        {!home && (
          <>
            <div className={layoutStyles.backToHome}>
              <Link href="/" passHref>
                <a href="/">← Back to home</a>
              </Link>
            </div>
            <br />
            <br />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
