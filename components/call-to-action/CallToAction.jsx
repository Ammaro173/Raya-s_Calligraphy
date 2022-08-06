import React from 'react';
import { Container, Row, Col, Button, Card } from 'reactstrap';
import Image from 'next/image';
import img1 from '../../assets/coming_soon/img1.JPG';
import img2 from '../../assets/coming_soon/img2.JPG';
import img3 from '../../assets/coming_soon/img3.JPG';
import img4 from '../../assets/coming_soon/img4.JPG';
import img5 from '../../assets/coming_soon/img5.JPG';
import img6 from '../../assets/coming_soon/img6.JPG';
import img7 from '../../assets/coming_soon/img7.JPG';
import img8 from '../../assets/coming_soon/img8.JPG';
import img9 from '../../assets/coming_soon/img9.JPG';
import img10 from '../../assets/coming_soon/img10.JPG';
import img11 from '../../assets/coming_soon/img11.JPG';
import img12 from '../../assets/coming_soon/img12.PNG';

function renderComingSoon() {
	let instLink = 'https://www.instagram.com/rayas.calligraphy/';
	// let x = [1];
	// let coming_soon = [
	// 	{
	// 		description: 'hi',
	// 		imgs: `../../assets/images/blog/blog-home/img${x[0]}.jpg`,
	// 	},
	// 	{},
	// 	{},
	// ];
	// console.log(coming_soon.map((elee) => elee.description));

	return (
		<Row className='justify-content-center'>
			<Row>
				<Col lg='4' md='6'>
					<Card className=''>
						<a href='#'>
							<Image className='card-img-top' src={img1} alt='Manal-with-Frane' />
						</a>
						<h5 className='m-l-5 font-medium m-t-10'>Make your Own frame and designs</h5>
						<p className=' m-l-5 m-t-10'>You can choose a name and a design</p>
						<a
							href={instLink}
							className='text-center linking text-themecolor m-t-10' //text-themecolor
						>
							DM me <i className='ti-arrow-right'></i>
						</a>
					</Card>
				</Col>
				<Col lg='4' md='6'>
					<Card>
						<a href={instLink}>
							<Image className='card-img-top' src={img2} alt='Seela' />
						</a>

						<h5 className='m-l-5 font-medium m-t-10'>
							<a href={instLink} className='link'>
								Calligraphy using stitching
							</a>
						</h5>
						<p className=' m-l-5 m-t-10'>You can choose a name and a design</p>
						<a href={instLink} className='linking text-center text-themecolor m-t-10'>
							DM me <i className='ti-arrow-right'></i>
						</a>
					</Card>
				</Col>
				<Col lg='4' md='6'>
					<Card>
						<a href={instLink}>
							<Image className='card-img-top' src={img3} alt='World-Map-Stitches' />
						</a>

						<h5 className='m-l-5 font-medium m-t-10'>
							<a href={instLink} className='link'>
								Drawing using stitching
							</a>
						</h5>
						<p className='m-l-5 m-t-10'>You can choose a name and a design</p>
						<a href={instLink} className='linking text-center text-themecolor m-t-10'>
							DM me <i className='ti-arrow-right'></i>
						</a>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg='4' md='6'>
					<Card>
						<a href={instLink}>
							<Image className='card-img-top' src={img4} alt='wrappixel kit' />
						</a>

						<h5 className='font-medium m-l-5 m-t-10'>
							<a href={instLink} className='link'>
								Calligraphied Stickers
							</a>
						</h5>
						<p className='m-l-5 m-t-10'>You can choose a name and a design</p>
						<a href={instLink} className='linking text-center text-themecolor m-t-10'>
							DM me <i className='ti-arrow-right'></i>
						</a>
					</Card>
				</Col>
				<Col lg='4' md='6'>
					<Card>
						<a href={instLink}>
							<Image className='card-img-top' src={img5} alt='wrappixel kit' />
						</a>

						<h5 className='font-medium m-l-5 m-t-10'>
							<a href={instLink} className='link'>
								Calligraphy on T-Shirt
							</a>
						</h5>
						<p className='m-l-5 m-t-10'>You can choose a name and a design, different sizes will be available</p>
						<a href={instLink} className='text-center linking text-themecolor m-t-10'>
							DM me <i className='ti-arrow-right'></i>
						</a>
					</Card>
				</Col>
				<Col lg='4' md='6'>
					<Card>
						<a href={instLink}>
							<Image className='card-img-top' src={img6} alt='wrappixel kit' />
						</a>

						<h5 className='font-medium m-l-5 m-t-10'>
							<a href={instLink} className='link'>
								Calligraphy on wooden crafts
							</a>
						</h5>
						<p className='m-l-5 m-t-10'>Different designs will be posted in the instagram page</p>
						<a href={instLink} className='text-center linking text-themecolor m-l-5 m-t-10'>
							DM me <i className='ti-arrow-right'></i>
						</a>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg='4' md='6'>
					<Card>
						<a href={instLink}>
							<Image className='card-img-top' src={img7} alt='wrappixel kit' />
						</a>

						<h5 className='font-medium m-l-5 m-t-10'>
							<a href={instLink} className='link'>
								Calligraphy on T-Shirt
							</a>
						</h5>
						<p className='m-l-5 m-t-10'>You can choose a name and a design, different sizes will be available</p>
						<a href={instLink} className='text-center linking text-themecolor m-t-10'>
							DM me <i className='ti-arrow-right'></i>
						</a>
					</Card>
				</Col>
				<Col lg='4' md='6'>
					<Card>
						<a href={instLink}>
							<Image className='card-img-top' src={img8} alt='wrappixel kit' />
						</a>

						<h5 className='font-medium m-l-5 m-t-10'>
							<a href={instLink} className='link'>
								Calligraphy on Hoodies
							</a>
						</h5>
						<p className='m-l-5 m-t-10'>You can choose a name and a design, different sizes will be available</p>
						<a href={instLink} className='text-center linking text-themecolor m-t-10'>
							DM me <i className='ti-arrow-right'></i>
						</a>
					</Card>
				</Col>
				<Col lg='4' md='6'>
					<Card>
						<a href={instLink}>
							<Image className='card-img-top' src={img9} alt='wrappixel kit' />
						</a>

						<h5 className='font-medium m-l-5 m-t-10'>
							<a href={instLink} className='link'>
								Wooden Crafts
							</a>
						</h5>
						<p className='m-l-5 m-t-10'>Different designs will be posted in the instagram page</p>
						<a href={instLink} className='text-center linking text-themecolor m-t-10'>
							DM me <i className='ti-arrow-right'></i>
						</a>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col lg='4' md='6'>
					<Card>
						<a href={instLink}>
							<Image className='card-img-top' src={img10} alt='wrappixel kit' />
						</a>

						<h5 className='font-medium m-l-5 m-t-10'>
							<a href={instLink} className='link'>
								Calligraphy on Mugs & Cups
							</a>
						</h5>
						<p className='m-l-5 m-t-10'>You can choose a name and a design, different colors will be available</p>
						<a href={instLink} className='text-center linking text-themecolor m-t-10'>
							DM me <i className='ti-arrow-right'></i>
						</a>
					</Card>
				</Col>
				<Col lg='4' md='6'>
					<Card>
						<a href={instLink}>
							<Image className='card-img-top' src={img11} alt='wrappixel kit' />
						</a>

						<h5 className='font-medium m-l-5 m-t-10'>
							<a href={instLink} className='link'>
								Calligraphy on Rubber mobile covers
							</a>
						</h5>
						<p className='m-l-5 m-t-10'>You can choose a name and a design</p>
						<a href={instLink} className='text-center linking text-themecolor m-t-10'>
							DM me <i className='ti-arrow-right'></i>
						</a>
					</Card>
				</Col>
				<Col lg='4' md='6'>
					<Card>
						<a href={instLink}>
							<Image className='card-img-top' src={img12} alt='wrappixel kit' />
						</a>

						<h5 className='font-medium m-l-5 m-t-10'>
							<a href={instLink} className='link'>
								Calligraphy on Plastic mobile covers
							</a>
						</h5>
						<p className='m-l-5 m-t-10'>You can choose a name and a design</p>
						<a href={instLink} className='text-center linking text-themecolor m-t-10'>
							DM me <i className='ti-arrow-right'></i>
						</a>
					</Card>
				</Col>
			</Row>
		</Row>
	);
}

const CallToAction = () => {
	return (
		<div className='coming-soon ' id='coming'>
			<Container className='py-5 mt-5'>
				<Row className='m-t-40 justify-content-center'>
					<Col>
						<div className='d-flex align-items-center'>
							<div>
								<h2 className='title text-white font-weight-bold'>Desgins coming soon , DM me for availablity</h2>
								<div>
									<div className='blog-home2 spacer p-2 '>
										<Container>
											<Row className='m-t-30 justify-content-center'>{renderComingSoon()}</Row>
										</Container>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default CallToAction;
