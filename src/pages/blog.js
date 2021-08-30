import SEO from 'components/seo';
import Layout from 'components/layout';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/blog';

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Read our blog"
        description="We have intensive blog written by the expert"
      />
      <Blog />
      <SubscribeUs />
    </Layout>
  );
}
