import React from "react";

export default function Photos(props) {
if (props.photos) {
    return (
            <div className="Photos">
            <div className="row">
        {props.photos.map(function (photos, index) {
            return (
                <div className="col-4" key={index}>
              <img src={photos.src.landscape} className="img-fluid mb-1" /> 
              </div> 
            )
        })}
        </div>
        </div>
    )
    } else {
        return null 
    }
    }
