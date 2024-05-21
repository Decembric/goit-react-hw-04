

const SearchBar = ({ onSubmit }) => {
  function onSearchForm(event) {
    event.preventDefault()
    onSubmit(event.target.elements.search.value)
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