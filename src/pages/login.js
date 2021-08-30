import Layout from 'components/layout';

export default function IndexPage() {
  return (
    <Layout>
      <div style={styles.centered}>
        <h1>Login</h1>
        <p>Not Implimented</p>
      </div>
    </Layout>
  );
}

const styles = {
  centered: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
