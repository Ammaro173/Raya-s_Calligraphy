/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';

const Footer = () => {
	return (
		<div className='footer4 b-t spacer'>
			<Container>
				<Row>
					<Col lg='3' md='6' className='m-b-30'>
						<h5 className='m-b-20'>Address</h5>
						<p>Amman, Khalda</p>
					</Col>
					<Col lg='3' md='6' className='m-b-30'>
						<h5 className='m-b-20'>Phone</h5>
						Reception :
						<a className='link' href='tel:+962 79 646 4931'>
							+962 79 646 4931
						</a>{' '}
						<br />
					</Col>
					<Col lg='3' md='6' className='m-b-30'>
						<h5 className='m-b-20'>Email</h5>
						<p>
							Shoot Me an Email :
							<br />
							<a className='link' href='mailto:rayaeaf2003@gmail.com?subject=subject text'>
								rayaeaf2003@gmail.com
							</a>
							<br />
						</p>
					</Col>
					<Col lg='3' md='6'>
						<h5 className='m-b-20'>Social</h5>
						<div className='round-social light'>
							<Link href='https://www.facebook.com/raya.abulfeilat'>
								<a className='link'>
									<i className='fa fa-facebook'></i>
								</a>
							</Link>
							<Link href='https://twitter.com/gr8raya'>
								<a className='link'>
									<i className='fa fa-twitter'></i>
								</a>
							</Link>
							<Link href='https://www.instagram.com/gr8raya/'>
								<a className='link'>
									<i className='fa fa-instagram'></i>
								</a>
							</Link>
						</div>
					</Col>
				</Row>
				<div className='f4-bottom-bar'>
					<Row>
						<Col md='12'>
							<div className='d-flex font-14'>
								<div className='m-t-10 m-b-10 copyright'>
									All Rights Reserved by{' '}
									<Link href='https://www.instagram.com/gr8raya/'>
										<a className='link'>Raya</a>
									</Link>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
};
export default Footer;
