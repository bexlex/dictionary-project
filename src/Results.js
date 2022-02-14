import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props){
    console.log(props.results);
    if (props.results) {
        return (
            <div className="Results">
                <h2>{props.results.word}</h2>
                {props.results.phonetics.map(function(phonetic,index) {
                    return (
                        <div key ={index}>
                            <Phonetics phonetics={phonetic} />
                        </div>
                    );
                })}    
                
                {props.results.meanings.map(function(meanings, index){
                    return (
                        <section key={index}>
                            <Meanings meanings={meanings}/>
                        </section>
                    );
                })}
            </div>
        );
        } else {
        return null
    }
}
