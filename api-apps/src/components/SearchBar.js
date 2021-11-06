import React, { useState } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(term);
  };

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <form onSubmit={onFormSubmit} className="card p-3 mx-5 my-2 bg-light">
      <label htmlFor="formGroupExampleInput" className="form-label">
        Image Search
      </label>
      <input
        type="text"
        onChange={onInputChange}
        value={term}
        className="form-control"
        id="formGroupExampleInput"
        placeholder="Enter image search text!"
      />
    </form>
  );
};

export default SearchBar;
