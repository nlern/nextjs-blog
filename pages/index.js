import Link from 'next/link';

import Layout from '../components/layout/layout';
import Date from '../components/date';

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
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li
              className={utilStyles.listItem}
              key={id}
              className='transition delay-150 ease-in-out p-4 mb-2 shadow hover:shadow-lg'
            >
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <div className={utilStyles.lightText}>
                <small>
                  <Date dateString={date} />
                </small>
              </div>
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
