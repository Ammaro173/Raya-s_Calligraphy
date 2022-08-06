import React from 'react';

// core components
import Banner2 from '../banner/Banner2';

// sections for this page

import BannerComponent from './sections/bannercomponent';
import PortfolioComponent from './sections/portfoliocomponent';
import CallToAction from '../../components/call-to-action/CallToAction';

const CustomComponents = () => {
	return (
		<div>
			<Banner2 />

			<BannerComponent />

			<PortfolioComponent />

			<CallToAction />
		</div>
	);
};

export default CustomComponents;
