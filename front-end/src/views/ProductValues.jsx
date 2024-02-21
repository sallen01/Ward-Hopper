import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';

const item = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	px: 5,
};

function ProductValues() {
	return (
		<Box
			component='section'
			sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'common.white' }}
		>
			<Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
				<Box
					component='img'
					src='/static/themes/onepirate/productCurvyLines.png'
					alt='curvy lines'
					sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
				/>
				<Grid container spacing={5}>
					<Grid item xs={12} md={4}>
						<Box sx={item}>
							<StarIcon sx={{ fontSize: 55, color: 'primary.main' }} />
							<Typography variant='h6' sx={{ my: 5 }}>
								Rate your ward
							</Typography>
							<Typography variant='h5'>
								{
									'Share your experiences and insights by providing ratings to your local ward.'
								}

								{
									' Help others discover the strengths and unique qualities of your ward.'
								}
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box sx={item}>
							<SearchIcon sx={{ fontSize: 55, color: 'primary.main' }} />
							<Typography variant='h6' sx={{ my: 5 }}>
								Explore Ward Ratings
							</Typography>
							<Typography variant='h5'>
								{'Dive into a rich collection of ward ratings and reviews. '}
								{
									'Explore diverse perspectives to make informed decisions about your ward attendance.'
								}
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box sx={item}>
							<HomeIcon sx={{ fontSize: 55, color: 'primary.main' }} />
							<Typography variant='h6' sx={{ my: 5 }}>
								Attend Wards of Interest
							</Typography>
							<Typography variant='h5'>
								{'Explore and engage with wards beyond your own. '}
								{'Attend wards that align with your preferences. '}
								{
									'Expand your horizons and build meaningful connections beyond your immediate area.'
								}
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default ProductValues;
