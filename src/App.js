import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import Home from './Pages/Home/';
import Projects from './Pages/AboutUs/Projects';
import Mission from './Pages/AboutUs/Mission';
import Vision from './Pages/AboutUs/Vision';
import ContactUs from './Pages/AboutUs/ContactUs';

function App() {
  return (
    <div className="App">

      <Nav/> 

      <Header/>
      
      <Router>
        <Route exact path="/" render={() => (<Redirect to="/home" />)} />
        <Route exact path="/about-us/contact-us" render={(props) => (<ContactUs/>) }/>
        <Route exact path="/about-us/projects" render={(props) => (<Projects/>) }/>
        <Route exact path="/about-us/mission" render={(props) => (<Mission/>) }/>
        <Route exact path="/about-us/vision" render={(props) => (<Vision/>) }/>
        <Route path="/home" component={Home}/>
      </Router>

      <Footer/>
      
    </div>
  );
}

export default App;
