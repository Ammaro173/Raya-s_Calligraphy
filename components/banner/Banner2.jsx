import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
// import bannerimg from '../../assets/images/landingpage/banner-img.png';
import bannerimg2 from '../../assets/images/staticslider/slider/assorted-colored-brushes-removebg.png';

const Banner2 = () => {
	return (
		<div className=' banner-2' style={{ backgroundColor: '#D0C7E5' }}>
			<Container>
				<Row className=''>
					<Col lg='6' md='6' className='align-self-center'>
						<h1 className='title'>Welcome To Raya`s Calligraphy</h1>
						<h3 className='subtitle'>
							An ambitious, multi-talented lady who can turn a stone 🗿 into diamond by her creativity💎
							<br />
							Scroll to see my artworks or press the buttons below
						</h3>
						<a
							href='https://www.instagram.com/rayas.calligraphy/'
							style={{ position: 'relative', zindex: '1' }}
							className='btn btn-danger m-r-20 btn-md m-t-30 '
						>
							Check My Work in Instagram
						</a>
						<Link href='/#coming'>
							<a className='btn btn-md m-t-30  btn-outline-light ' style={{ scrollbehavior: 'smooth' }}>
								Coming Soon
							</a>
						</Link>
					</Col>
					<Col lg='6' md='6'>
						<Image src={bannerimg2} alt='hero banner' width='500' height='520' />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Banner2;
