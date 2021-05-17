import Layout from '../../components/layout/layout';

import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <Layout title={postData.title}>
      {postData.title}
      <br />
      {postData.date}
      <br />
      <div
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        className='mt-4'
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
