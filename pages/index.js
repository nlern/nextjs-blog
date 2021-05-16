import Layout from '../components/layout/layout';

import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout title='Home' home>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <strong>Shantanu</strong>! I am a Frontend Web Developer.
          You can contact me on Twitter.
        </p>
      </section>
    </Layout>
  );
}
