import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

function Copyright() {
	return (
		<React.Fragment>
			{'© '}
			<Link color='inherit' href='https://mui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
		</React.Fragment>
	);
}

function AppFooter() {
	return (
		<Typography
			component='footer'
			sx={{ display: 'flex', bgcolor: 'primary.main' }}
		>
			<Container sx={{ my: 8, display: 'flex' }}>
				<Grid container spacing={5}></Grid>
			</Container>
		</Typography>
	);
}

export default AppFooter;
