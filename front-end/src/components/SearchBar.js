import { styled } from '@mui/system';
import { InputBase } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';


const StyledInputBase = styled(InputBase)({
  color: '#286081',
  border: '1px solid #286081',
  borderRadius: '5px',
  padding: '5px',
  backgroundColor: 'white',
  width: '100%',
});

function SearchBar({ setSearchResults }) {
  const [searchQuery, setSearchQuery] = useState('');

  const fetchWards = async (searchQuery) => {
    try {
      const response = await axios.get(`http://localhost:3500/api/ward/search/${searchQuery}`);
      setSearchResults(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching wards:', error);
    }
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchQuery(searchTerm);
    fetchWards(searchTerm);
  };

  return (
    <StyledInputBase
        placeholder="Search for wards..."
        onChange={handleSearchChange}
    />
  );
}

export default SearchBar;
