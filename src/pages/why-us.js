import SEO from 'components/seo';
import Layout from 'components/layout';
import WhyUs from 'sections/why-us';

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Why choose us"
        description="The following reason should be compelling enough to choose us"
      />
      <WhyUs />
    </Layout>
  );
}
