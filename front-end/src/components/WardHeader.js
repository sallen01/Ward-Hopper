import { styled } from '@mui/system';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { useState } from 'react';
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
  height: 'auto',
  fontFamily: 'Nunito',
});

const SearchContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
    marginRight: '10%',
    position: 'relative', 
  });

const TextColorPrimary = styled('span')({
  color: '#286081',
});

const TextColorSecondary = styled('span')({
  color: '#96999a',
});

function WardHeader() {
  const [searchResults, setSearchResults] = useState([]);

  const clearSearchResults = () => {
    setSearchResults([]);
  }

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
    </StyledDiv>
  );
}

export default WardHeader;
