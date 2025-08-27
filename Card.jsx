import React from "react";

function Card(props){
    return(
        <div style={{border:"1px solid #ccc", padding:"15px",borderRadius:"10px",width:"250px"}}>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    )
}

export default Card