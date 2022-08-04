import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container, NavLink } from 'reactstrap';
// import HeaderComponent from '../../components/custom/headercomponent';
// import logo from '../../assets/images/logos/logo_Raya2.png';
// import raya1 from '../../assets/images/logos/raya1.jpg';
// import raya2 from '../../assets/images/logos/raya2.png';
// import raya3 from '../../assets/images/logos/raya3.png';
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
						{/* <NavbarToggler onClick={toggle}>
							<span className='ti-menu'></span>
						</NavbarToggler> */}
						<Collapse isOpen={isOpen} navbar className='hover-dropdown ml-auto' id='h6-info'>
							<Nav navbar className='ml-auto'>
								<NavItem>
									<Link href='/'>
										<a className={router.pathname == '/' ? ' nav-link' : 'text-white  nav-link'}>Home</a>
									</Link>
								</NavItem>
								<NavItem>
									<Link href='/#About'>
										<a className={router.pathname == '/#About' ? 'text-white nav-link' : 'nav-link'}>About</a>
									</Link>
								</NavItem>
							</Nav>
							{/* <div className='act-buttons'>
								<NavLink href='https://wrappixel.com/templates/nextkit-nextjs-free-uikit' className='btn btn-light font-14' target='_blank'>
									Download Free
								</NavLink>
							</div> */}
						</Collapse>
					</Navbar>
				</Container>
			</div>
		</div>
	);
};

export default Header;
