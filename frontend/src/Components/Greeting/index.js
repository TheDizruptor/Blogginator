/* Justin Edwards
 * 10/08/2020
 * Greeting Component - This is useless in the scope 
 * of our project, but has been useful for setting up 
 * frontend/backend connectivity. Read the block comment 
 * at the top of Components/Auth/LoginForm to get an idea 
 * of how these components will work and interact with the 
 * backend. I also left some comments in the code itself 
 * that are little notes about how react works and what the 
 * code is doing. Not really gonna document this one since 
 * it's useless in the grand scheme anyway.
 */

import React, { useState } from 'react';
import logo from '../../logo.svg';
import AuthService from '../../Services/AuthService';
import GreetingService from '../../Services/GreetingService';


function Greeting(props) {
  // state hooks - hooks can ONLY be set with their setter functions
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  // fetch from api
  const handleSayHelloPress = async (event) => {
    event.preventDefault();
    // make axios call to backend using GreetingService
    // getGreeting function. It's async, so .then().catch() 
    // syntax is necessary to wait for a response/error then 
    // use/handle it
    GreetingService.getGreeting(name)
    .then((response) => {
      console.log(response);  // helpful for understanding response
      let respName = response.data.name;
      setGreeting(respName);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log("error: ", error);  // helpful for understanding error
    })
  }

  // as input is changed, set state appropriately
  const onNameInput = (event) => {
    event.preventDefault();
    setName(event.target.value);
    setIsLoading(false);
  }

  // uses logout() function in AuthService to 
  // remove user's email from sessionStorage
  const handleSignOut = () => {
    AuthService.logout();
    props.history.push(`/`);  // redirect to home
    
  }

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
        <button onClick={handleSignOut}>Sign Out</button>
      </header>
    </div> : <div>Loading...</div>
  );
}

export default Greeting;