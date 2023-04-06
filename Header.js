import React from "react";

function Header() {
  return (
    <>
      <img src="little-lemon\src\Restaurant Food (2).png" alt="Restaurant food" class = "food"/>
      <header>
        <div class='hheader'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
        </div>
        <p>
            We are a family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
        </p>
        
          <button onClick={() => alert("Loading...!")}>Reserve a table</button>
        
      </header>
    </>
  );
}

export default Header;
