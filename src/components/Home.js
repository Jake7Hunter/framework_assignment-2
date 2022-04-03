import React, { useState } from "react";

function Home() {
  const [lock, setLock] = useState("Locked");
  return (
    <main className="content">
      <h1>Home</h1>
      
      <div className="intro">
        <button onClick={ () => setLock("Hi There! Welcome to my website. Sorry I made you unlock this text. ANyway, feel free to view the rest of the site now!")}>Click Here to Unlock!</button>

        <h1>{lock}!</h1>

        
      </div>
    </main>
  );

   
}

export default Home;
