/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import Image from 'next/image';
// import herobanner from '../../../assets/images/staticslider/slider/hero-banner.jpg';
import herobanner2 from '../../../assets/images/staticslider/slider/assorted-colored-brushes2.jpg';

const BannerComponent = () => {
	return (
		<div>
			<div className='spacer' id='About'>
				<br></br>
			</div>
			<div className='static-slider10'>
				<Container>
					<Row className=''>
						<Col md='6' className='align-self-center '>
							{/* <span className='label label-rounded label-inverse'>Creating Brands</span> */}
							<h1 className='title'>A Breif Summary</h1>
							<h6 className='subtitle op-8'>
								Investing my Calligraphic skills on making Creative and High Quality, You can Create your Custom Made Wooden Slices. Sneek
								peek to see it, hope you like them.
							</h6>
							<a className='btn btn-light btn-rounded btn-md m-t-20' data-toggle='collapse' href='/#products'>
								<span>Lets go</span>
							</a>
						</Col>
						<Col md='6'>
							<Image src={herobanner2} alt='herobanner'></Image>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default BannerComponent;
