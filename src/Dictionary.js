import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";


export default function Dictionary() {
let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);

function search(event) {
    event.preventDefault(); 

    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    axios.get(apiUrl).then(handleResponse);
}

function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
}

function handleKeywordChange(event) {
    setKeyword(event.target.value);
}


    return (
        <div className="Dictionary">
            <div>Dictionary</div>
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
            <div>
            <Results results={results} />
            </div>
        </div>
    );
}