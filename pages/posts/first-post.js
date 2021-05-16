import Link from 'next/link';

import Layout from '../../components/layout/layout';

export default function FirstPost() {
  return (
    <Layout title='First Post'>
      <h1 className='title'>First Post</h1>
      <Link href='/'>
        <a>Back to Home</a>
      </Link>
    </Layout>
  );
}
