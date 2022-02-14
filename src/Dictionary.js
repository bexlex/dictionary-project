import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary() {
let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);
let [photos, setPhotos] = useState(null);

function search(event) {
    event.preventDefault(); 

    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey="563492ad6f91700001000001a89e0ea740f2419bb58e0c481fca2e93";
    let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let  headers = {Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
}

function handleResponse(response) {
    setResults(response.data[0]);
}

function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
}

function handleKeywordChange(event) {
    setKeyword(event.target.value);
}


    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input className="search-bar" type="search" onChange={handleKeywordChange} />
            </form>
            <div>
            <Results results={results} />
            <Photos photos={photos} />
            </div>
        </div>
    );
}