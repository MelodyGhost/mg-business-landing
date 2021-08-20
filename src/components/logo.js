/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      MG BRAND
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#913831',
  },
};
