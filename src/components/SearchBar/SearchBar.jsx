import { toast } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  function onSearchForm(event) {
    event.preventDefault()
    const query = event.target.elements.search.value.trim()
    event.target.reset()
    if (query === "") {
      toast.error('Please enter a search query');
      return;
    }
    onSubmit(query);
  }

  return (
    <header>
      <form onSubmit={onSearchForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  )
}

export default SearchBar