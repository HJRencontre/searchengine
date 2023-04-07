import React, { useState } from "react"; //Import du hook useState permettant de gérer l'état d'un composant

//Fonction searchBar, onSearch en paramètre appellée lorsque l'utilisateur soumet une requête
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query === "") {
      alert("There is nothing to search now.");
    } else {
      onSearch(query);
    }
  };

  return (
    <div className="flex justify-center m-10 rounded-md inline-block w-auto h-auto">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Type your input here ! 😊"
          className="px-4 py-2 border border-2 rounded-md border-green-900"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-green-900 text-white rounded-md"
        >
          Search ❗
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
