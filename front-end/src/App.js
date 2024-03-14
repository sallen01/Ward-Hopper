import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Ward from './pages/Ward';
import Review from './pages/Review';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
					<Route path='/ward/:id' element={<Ward />} />
					<Route path='/review/:id' element={<Review />} />
					<Route path="*" element={<Navigate to="/" />}  />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
