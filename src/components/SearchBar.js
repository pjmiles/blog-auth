const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => {
  return (
    <div className="search-bar-wrap">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          onChange={handleSearchKey}
          placeholder="search by category"
          value={value}
        ></input>
        {value && <span onClick={clearSearch}>X</span>}
        <button className="search-bar-btn">Go</button>
      </form>
    </div>
  );
};

export default SearchBar;
