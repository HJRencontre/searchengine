import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  const [images, setImages] = useState([]); //Définition du tableau d'image
  const [query, setQuery] = useState(""); //Définition de la requête

  //Définition de la fonction permettant d'utiliser l'API de Pixabay
  const searchQuery = async (query) => {
    if (query !== "") {
      const apiKey = "35180672-5db3ab838492e22df758528c0"; //Clé API
      const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&pretty=true`; //Lien de la requête

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setImages(data.hits);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    searchQuery(query);
  }, [query]);

  return (
    <div className="container mx-auto rounded-md">
      <SearchBar onSearch={searchQuery} />
      {/*affichage des images*/}
      <div className="grid grid-cols-3 gap-4 m10">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            className={`h-48 w-full border border-stone-900 object-cover rounded-md transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-105 fade-in delay-${App.css}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
