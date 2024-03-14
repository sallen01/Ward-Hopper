import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const StyledResults = styled('div')({
    position: 'absolute',
    top: '100%',
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 0px 0px #ddd',
    borderRadius: '10px',
    maxHeight: '300px',
    // overflowY: 'scroll',
});

const StyledResult = styled('div')({
    color: '#286081', 
    width: '100%',
    padding: '10px 20px',
    borderRadius: '10px',
    fontFamily: 'Nunito',
    ':hover': {
        backgroundColor: '#eaf7ff',
    },
});

function SearchResults({ searchResults, clearSearchResults }) {
    const navigate = useNavigate();

    const handleResultClick = (wardId) => {
        const id = wardId;
        clearSearchResults();
        navigate(`/ward/${id}`);
      };

  return (
    <StyledResults>
        {searchResults.map((searchResult) => (
            <StyledResult key={searchResult.wardId} onClick={() => handleResultClick(searchResult.wardId)}>
                {searchResult.wardName}
            </StyledResult>
        ))}
    </StyledResults>
  );
}

export default SearchResults;
