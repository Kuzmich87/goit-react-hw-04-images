import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  Header,
  ButtonIcon,
  Input,
  SearchButton,
  SearchForm,
} from './Searchbar.styled';

export function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handlSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.warn('Insert correct request');
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handlSubmit}>
        <SearchButton>
          <ButtonIcon />
        </SearchButton>
        <Input
          type="text"
          name="searchQuery"
          value={searchQuery}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleQueryChange}
        />
      </SearchForm>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
