import React from "react";
import Synonyms from "./Synonyms"
import "./Meanings.css";

export default function Meanings(props) {
console.log(props.meanings)
    return (
        <div className="Meanings">
            <h3>{props.meanings.partOfSpeech}</h3>
            {props.meanings.definitions.map(function (definition, index)
            {
               return (
                   <div key={index}>
                       <p>{definition.definition}
                       <div className="meanings-example"><strong>Example: </strong>{definition.example}</div></p>
                    <Synonyms synonyms={definition.synonyms} />
                    </div>
               ); 
            })}
        </div>
    );
}
