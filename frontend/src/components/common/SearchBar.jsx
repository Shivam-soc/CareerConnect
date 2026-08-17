import "./SearchBar.css";
import InputField from "./InputField";
import Button from "./Button";

function SearchBar({
  search,
  setSearch,
  placeholder = "Search jobs, companies..."
}) {

  return (

    <div className="search-bar">

      <InputField
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button>
        Search
      </Button>

    </div>

  );

}

export default SearchBar;