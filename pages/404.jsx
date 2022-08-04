import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col, Button, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const ErrorPage = () => {
	return (
		<div className=''>
			<Head>
				<title>404 - Page not Found</title>
				<meta name='description' content='The page you are looking for is not found go back to the homepage' />
				<link rel='shortcut icon' href='https://i.ibb.co/tBzKnBZ/raya1.jpg' />
			</Head>

			<Container>
				<Row className='justify-content-center'>
					<Col lg='8' md='6' className='align-self-center text-center'>
						<h1 className='title'>404 - Error</h1>
						<h4 className='subtitle font-light'>
							The page you are looking for is not available
							<br /> please go back to homepage
						</h4>
						<Link href='/'>
							<Button className='btn btn-md m-t-30 btn-info-gradiant font-14'>Back to Homepage</Button>
						</Link>
					</Col>
				</Row>
			</Container>

			<>
				<Container>
					<Card className='my-2'>
						<CardImg
							className='ms-auto align-self-center'
							alt='Card image cap'
							bottom
							src='https://i.pinimg.com/originals/df/2b/17/df2b17688cdb031c3849dd016666bbb5.jpg'
							style={{
								position: 'relative',
								zindex: -1,
								height: '50%',
								width: '50%',
							}}
						/>
					</Card>
				</Container>
			</>
		</div>
	);
};

export default ErrorPage;
