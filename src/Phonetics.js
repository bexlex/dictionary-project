import React from "react";

export default function Phonectics(props) {
    return (
        <div className="Phonetics">
            <a href={props.phonetics.audio} target="_blank" rel="noopener noreferrer">Listen</a>
            {props.phonetics.text}
        </div>
    );
}