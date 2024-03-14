import { styled } from '@mui/system';
import { AppBar, Collapse, IconButton, Toolbar } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import { Link as Scroll } from 'react-scroll';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const StyledAppBar = styled(AppBar)({
  background: 'white',
  fontFamily: 'Nunito',
});

const StyledIcon = styled(SortIcon)({
  color: '#286081',
  fontSize: '2rem',
});

const AppTitle = styled('h1')({
  flexGrow: '0',
  display: 'flex',
  alignItems: 'center',
});

const AppBarWrapper = styled(Toolbar)({
  width: '90%',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
});

const StyledDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontFamily: 'Nunito',
});

const WelcomeText = styled('h1')({
  fontSize: '4.5rem',
  color: '#0e3d63',
  backgroundColor: 'white',
  borderRadius: '60px 60px',
  padding: '15px',
  transition: 'top 0.5s ease',
});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '45vh',
  textAlign: 'center',
});

const SearchContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    marginRight: '10%',
    position: 'relative', 
  });

const GoDown = styled(ExpandMoreIcon)({
  color: 'white',
  fontSize: '4rem',
});

const TextColorPrimary = styled('span')({
  color: '#286081',
});

const TextColorSecondary = styled('span')({
  color: '#96999a',
});

function HomeHeader() {
  const [checked, setChecked] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const clearSearchResults = () => {
    setSearchResults([]);
  }

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <StyledDiv id="header">
      <StyledAppBar>
        <AppBarWrapper>
          <AppTitle>
            <TextColorSecondary>Ward</TextColorSecondary>
            <TextColorPrimary>Hopper</TextColorPrimary>
          </AppTitle>
          <SearchContainer>
            <SearchBar setSearchResults={setSearchResults}/>
            <SearchResults searchResults={searchResults} clearSearchResults={clearSearchResults}/>
          </SearchContainer>
          <IconButton>
            <StyledIcon />
          </IconButton>
        </AppBarWrapper>
      </StyledAppBar>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapseHeight={50}>
        <Container>
          <WelcomeText>
            <TextColorSecondary>Upgrade</TextColorSecondary>
            <TextColorPrimary> your Sunday</TextColorPrimary>
          </WelcomeText>
          <Scroll to="values" smooth={true}>
            <IconButton>
              <GoDown />
            </IconButton>
          </Scroll>
        </Container>
      </Collapse>
    </StyledDiv>
  );
}

export default HomeHeader;
