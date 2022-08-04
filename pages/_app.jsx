import '../styles/scss/style.scss';
import Head from 'next/head';
import Layout from '../layout/Layout';

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Raya`s Calligraphy</title>
				<meta name='description' content='Raya`s Calligraphy' />
				<link rel='shortcut icon' href='https://i.ibb.co/tBzKnBZ/raya1.jpg' />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
