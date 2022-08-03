// import Head from 'next/head'
// import { Container, Row, Card, Button } from 'react-bootstrap'

import Head from 'next/head';
import CustomComponents from '../components/custom/Custom-components';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Raya`s Calligraphy</title>
				<meta name='description' content='Raya`s Calligraphy' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<CustomComponents />
		</div>
	);
}
