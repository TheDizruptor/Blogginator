import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthenticatedRoute from './Components/Auth/AuthenticatedRoute';
import './App.css';
import Greeting from './Components/Greeting';
import LoginForm from './Components/Auth/LoginForm';

function App() {

  return (
    <BrowserRouter>
      <Route path="/" exact component={LoginForm} />
      <Route path="/login" exact component={LoginForm} />
      <AuthenticatedRoute path="/greeting" exact component={Greeting} />
    </BrowserRouter>
  );
}

export default App;
