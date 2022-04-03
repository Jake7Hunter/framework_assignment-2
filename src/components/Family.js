import React from "react";
function Family(props) {
  return (
    <main className="content">
      <h1>{props.name}</h1>
      <div className="myFamily">
        <h4>Age:</h4>
        <h2>{props.age}</h2>
        <h4>Birthday:</h4>
        <h2>{props.birthday}</h2>
        <h4>Favourite Food:</h4>
        <h2>{props.favfood}</h2>
      </div>
    </main>
  );
}
export default Family;
