import React from "react";
import Synonyms from "./Synonyms"
import "./Meanings.css";

export default function Meanings(props) {
    return (
        <div className="Meanings">
            <h3>{props.meanings.partOfSpeech}</h3>
            {props.meanings.definitions.map(function (definition, index)
            {
               return (
                   <div key={index}>
                       <div>{definition.definition}
                       <p className="meanings-example"><strong>Example: </strong>{definition.example}</p></div>
                    <Synonyms synonyms={definition.synonyms} />
                    </div>
               ); 
            })}
        </div>
    );
}
