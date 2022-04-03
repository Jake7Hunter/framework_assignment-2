import React from "react";

function Family(props) {
    return(
        <main className="content">
            <h1>My Family</h1>
            <div className="myFamily">
                <h2>{props.name}</h2>
                <h3>{props.age}</h3>
                <h3>{props.birthday}</h3>
            </div>
        </main>        
    )
}

export default Family;