import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
	fontSize: 16,
	color: 'common.white',
	ml: 3,
};

function AppAppBar() {
	return (
		<div>
			<AppBar position='fixed'>
				<Toolbar sx={{ justifyContent: 'flex-start' }}>
					<Link
						variant='h6'
						underline='none'
						color='inherit'
						href='/premium-themes/onepirate/'
						sx={{ fontSize: 24 }}
					>
						{'WardHopper'}
					</Link>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
	);
}

export default AppAppBar;
