import { styled } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import HomeHeader from '../components/HomeHeader.js'
import Values from '../components/Values.js';

const StyledDiv = styled('div')({
  minHeight: '100vh',
  backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/LDS_Bonds-Ranch-4.jpg'})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
});

const StyledDiv2 = styled('div')({
  minHeight: '100vh',
  backgroundColor: '#286081',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

function Home() {
  return (
    <>
      <StyledDiv>
        <CssBaseline /> 
        <HomeHeader />
      </StyledDiv>
      <StyledDiv2>
        <Values />
      </StyledDiv2>
    </>
  );
}

export default Home;