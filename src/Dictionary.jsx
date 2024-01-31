import React, { useState } from "react";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState(null);

  function searchWord(event) {
    event.preventDefault();
    alert(`searching for ${keyWord}`);
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
