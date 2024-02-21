import Typography from '@mui/material/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import TextField from '@mui/material/TextField';
import backgroundImage from '../images/img_4024.jpg';

export default function ProductHero() {
	return (
		<ProductHeroLayout
			sxBackground={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundColor: '#7fc7d9',
				backgroundPosition: 'center',
			}}
		>
			<img
				style={{ display: 'none' }}
				src={backgroundImage}
				alt='increase priority'
			/>
			<Typography color='inherit' align='center' variant='h2' marked='center'>
				Find a ward
			</Typography>

			{/* Search bar */}
			<TextField
				id='outlined-basic'
				label='Search'
				variant='outlined'
				fullWidth
				InputProps={{ style: { background: 'white' } }}
				sx={{ mt: 4, maxWidth: '400px' }}
			/>
		</ProductHeroLayout>
	);
}
