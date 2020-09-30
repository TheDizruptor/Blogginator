import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // state hooks
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  // fetch from api
  const handleSayHelloPress = async (event) => {
    event.preventDefault();
    let response = await fetch('/greeting?name=' + name);
    let body = await response.json();
    setGreeting(body.name);
    setIsLoading(false);
  }
  //
  const onNameInput = (event) => {
    event.preventDefault();
    setName(event.target.value);
    setIsLoading(false);
  }

  return (
      !isLoading ?
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <input onChange={(event) => {onNameInput(event)}} placeholder="Enter Your Name..." />
          <button onClick={(event) => {handleSayHelloPress(event)}}>Say Hello!</button>
        </form>

        <p>{greeting}</p>

      </header>
    </div> : <div>Loading...</div>
  );
}

export default App;
