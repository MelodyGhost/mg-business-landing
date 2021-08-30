import SEO from 'components/seo';
import Layout from 'components/layout';
import OurTeam from 'sections/our-team';
import OtherServices from 'sections/other-services';

export default function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Our Teams"
        description="We have one of the best teams in the world"
      />
      <OurTeam />
      <OtherServices />
    </Layout>
  );
}
