import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
	console.log(children);
	console.log('Hello There Hacker check my github', 'https://github.com/Ammaro173', 'for more info');
	return (
		<div id='main-wrapper'>
			<Header />
			<div className='page-wrapper'>
				<div className='container-fluid'>{children}</div>
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
