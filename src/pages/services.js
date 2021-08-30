import SEO from 'components/seo';
import Layout from 'components/layout';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="MG Startup Service page"
        description="We are providing the following services."
      />
      <Services />
      <Testimonials />
    </Layout>
  );
}
