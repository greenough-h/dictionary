import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState(null);

  function handleResponse(response) {
    console.log(response.data.word);
  }

  function searchWord(event) {
    event.preventDefault();
    let searchedWord = keyWord;
    const apiKey = "t0cee57ed010o387a24333e4fba6d54e";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchedWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateWord(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="container Dictionary">
      <form onSubmit={searchWord}>
        <input type="search" onChange={updateWord} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
