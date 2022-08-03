import '../styles/scss/style.scss';
import Layout from '../layout/Layout';

export default function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
