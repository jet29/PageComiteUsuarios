import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import Home from './Pages/Home/'

function App() {
  return (
    <div className="App">

      <Nav/> 

      <Header/>
      
      <Router>
        <Route exact path="/" render={() => (<Redirect to="/Home" />)} />
        <Route path="/Home" component={Home}/>
      </Router>

      <Footer/>
      
    </div>
  );
}

export default App;
