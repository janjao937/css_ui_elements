import "./Searchbar.css";

export const Searchbar = () => {
  return (
  <div className="search-container">
    <label htmlFor ="search-field" className="hide">Search</label>
    <input type="search" className="search-bar" id="search-field" placeholder="Search..."></input>
  </div>
  );
}