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
    // TODO: change url to environment var
    let response = await fetch('http://localhost:8080/greeting?name=' + name);
    let body = await response.json();
    setGreeting(body.name);
    setIsLoading(false);
  }

  // useEffect(() => {
  //   console.log(greeting);
  // }, [greeting])

  // as input is changed, set state appropriately
  const onNameInput = (event) => {
    event.preventDefault();
    setName(event.target.value);
    setIsLoading(false);
  }

  // // example arrow function
  // const example = (test) => {
  //   console.log(test);
  // }
  //
  // // example regular function
  // function example(test) {
  //   console.log(test);
  // }

  return (
      !isLoading ?
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <input onChange={(event) => {onNameInput(event)}} placeholder="Enter Your Name..." />
          <button onClick={handleSayHelloPress}>Say Hello!</button>
        </form>

        <p>{greeting}</p>

      </header>
    </div> : <div>Loading...</div>
  );
}

export default App;
