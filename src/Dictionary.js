import React, { useState } from "react";

export default function Dictionary() {
let [keyword, setKeyword] = useState("");

function search(event) {
    event.preventDefault(); 
    alert(`Searching for ${keyword}`);
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
        </div>
    );
}