import React from "react";

export default function Photos(props){
    if (props.photos){
       return(
        <section className="photos">
            {props.photos.map(function(photo, index){
                return <img src={photo.src.tiny} key={index} />
            })}

        </section>
       )
    } else{
        return null;
    }
    
}