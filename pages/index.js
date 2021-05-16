import Link from 'next/link';

import Layout from '../components/layout/layout';

export default function Home() {
  return (
    <Layout title='Home'>
      <h1 className='title'>Welcome to Blog!</h1>
      <Link href='/posts/first-post'>
        <a>First Post</a>
      </Link>
    </Layout>
  );
}
