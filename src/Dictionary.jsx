import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    const apiKey = "t0cee57ed010o387a24333e4fba6d54e";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchWord(event) {
    event.preventDefault();
    search();
    photoSearch();
  }

  function updateWord(event) {
    setKeyWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
    photoSearch();
  }

  function photoSearch() {
    const photoApiKey = "t0cee57ed010o387a24333e4fba6d54e";
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${photoApiKey}`;
    axios.get(photoApiUrl).then(handlePhotos);
  }

  function handlePhotos(response) {
    setPhotos(response.data.photos);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={searchWord} className="container">
          <input
            type="search"
            onChange={updateWord}
            defaultValue={props.defaultKeyWord}
          />
          <input type="submit" value="Search" />

          <p className="hint">enter a word to search! ex. happy, sky, apple</p>
        </form>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
