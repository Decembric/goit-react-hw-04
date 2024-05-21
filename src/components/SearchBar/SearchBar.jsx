

const SearchBar = ({ onSubmit }) => {


  return (
    <header>
      <form onSubmit={onSubmit}>
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