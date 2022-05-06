import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [isResultLoaded, setIsResultLoaded] = useState(false);
  let [error, setError] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    if (response.status === 200) {
      setResults(response.data[0]);
      setError(false);
      setIsResultLoaded(true);
    }
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsResultLoaded(false);
    search();
  }

  function catchError() {
    setError(true);
    console.log("An error has occured");
  }

  function search() {
    if (keyword) {
      let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
      axios
        .get(dictionaryApiUrl)
        .then(handleDictionaryResponse)
        .catch(catchError);

      let pexelsApiKey =
        "563492ad6f91700001000001c58e8fd7283b4493af770cd00a565607";
      let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

      axios
        .get(pexelsApiUrl, {
          headers: { Authorization: `Bearer ${pexelsApiKey}` },
        })
        .then(handlePexelsResponse);
    }
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus="on"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
            <input type="submit" value="Search" />
          </form>
          <div className="hints">
            suggested keywords: sunset, book, yoga, hello...
          </div>
        </section>
        {error && (
          <section>Sorry, no results found in English Dictionary.</section>
        )}
        {isResultLoaded && (
          <React.Fragment>
            <Results results={results} />
            <Photos photos={photos} />
          </React.Fragment>
        )}
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
