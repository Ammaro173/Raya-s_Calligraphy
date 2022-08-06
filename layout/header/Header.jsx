import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container, NavLink } from 'reactstrap';

import raya4 from '../../assets/images/logos/raya4.png';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className='topbar' id='top' style={{ position: 'relative', zindex: -1, backgroundColor: '#D0C7E5' }}>
			<div className='header6'>
				<Container className='po-relative'>
					<Navbar className='navbar-expand-lg h6-nav-bar'>
						<NavbarBrand href='/'>
							<Image src={raya4} alt='wrapkit' width='230' height='200' />
						</NavbarBrand>
					</Navbar>
				</Container>
			</div>
		</div>
	);
};

export default Header;
