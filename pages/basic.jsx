import Head from 'next/head';
import Components from '../components/basic/AllComponents';

export default function Basic() {
	return (
		<div>
			<Head>
				<title>Raya`s Calligraphy</title>
				<meta name='description' content='Raya`s Calligraphy' />
				<link rel='shortcut icon' href='https://i.ibb.co/tBzKnBZ/raya1.jpg' />
			</Head>
			<Components />
		</div>
	);
}
