import React, { useState } from 'react';
import Menu from "./components/Menu/Menu";
import Products from "./components/Products/Products";
import Panier from './components/Panier/Panier';
import './App.css';

function App(props) {
  const [displayCart, setDisplayCart] = useState(false);
  function handleClick(){
    console.log("click");
    console.log(displayCart);
    setDisplayCart(!displayCart);
  };
  return (
    <div className="App">
      <header>
        <Menu action={()=>{handleClick()}}/>
      </header>
      <main>
        {/*
        if(displayCart === true){
          <Cart/>
        } else {
          ""
        }
        */}
        {displayCart ? <Panier/> : ""}
        <Products/>
      </main>
    </div>
  );
}
export default App;