
import './App.css';
import {Nav,Container ,Navbar} from 'react-bootstrap';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import React, { useState } from "react";
import Home from './Components/Home';
import About from './Components/About';
import Heart from "react-animated-heart";
import Footer from './Components/Footer';

function App() {
  const [isClick, setClick] = useState(false);
  return (
  <>
  <BrowserRouter>
    <Navbar  className="nav">
    <Container>
    <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    
    <Navbar.Brand  className="logo">Capature the moment</Navbar.Brand>
    
    <div >
    <Nav className="me-auto" style={{position:'relative', marginRight:800 }} >
      <Nav.Link  href="/">Home</Nav.Link>
      <Nav.Link href="/About">Login</Nav.Link>
    
    </Nav>
</div>
    </Container>
  </Navbar>
  <Switch>
    <Route path="/" exact component={Home}></Route>
    <Route path="/About" exact component={About}></Route>
  </Switch>

  </BrowserRouter>
  <Footer />
  </>
   
  );
}

export default App;
