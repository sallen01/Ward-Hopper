import React from 'react';
// import AppToolbar from './components/AppToolbar';
import AppAppBar from './views/AppAppBar';
import ProductHero from './views/ProductHero';
import ProductValues from './views/ProductValues';
import AppFooter from './views/AppFooter';

const App = () => {
	return (
		<div>
			<AppAppBar />
			<ProductHero />
			<ProductValues />
			<AppFooter />
			{/* <AppToolbar /> */}
			{/* Your main content goes here */}
		</div>
	);
};

export default App;
