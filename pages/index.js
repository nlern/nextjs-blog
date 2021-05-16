import Link from 'next/link';

import Layout from '../components/layout/layout';

import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout title='Home' home>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <strong>Shantanu</strong>! I am a Frontend Web Developer.
          You can contact me on Twitter.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
