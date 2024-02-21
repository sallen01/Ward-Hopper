import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AppToolbar = () => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<IconButton size='large' edge='start' color='inherit' aria-label='menu'>
					<MenuIcon />
				</IconButton>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					Your App Name
				</Typography>
				<Button color='inherit'>Login</Button>
			</Toolbar>
		</AppBar>
	);
};

export default AppToolbar;
