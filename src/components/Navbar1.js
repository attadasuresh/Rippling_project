import React from 'react';
import './Navbar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Pricing from './Pricing';
import Features from './Features';
import Products from './Products';
import Customers from './Customers';
import Resources from './Resources';
import Login from './Login';
import Home from './Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
const Navbar1 = () => {
  return (
    <Router>
    <div>
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#0088cc"}}>
      <Container>
        <Navbar.Brand href="#home"  as={Link}to={"/Home"}> <span style={{color:"white",fontWeight:"bold"}}> Seamless-Staff-Hub </span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto" >


          <span  style={{ marginLeft:"50px",fontSize:"20px",fontWeight:"bold",fontFamily:"roboto"}}><NavDropdown  title= <span className='tittle1'>Products </span> id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link}to={"/Products"}>
               Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown></span>

    
            <Nav.Link style={{marginLeft:"20px",fontSize:"20px",fontWeight:"bold",fontFamily:"roboto"}} as={Link}to={"/Pricing"} >   <span className='tittle1'>Pricing </span></Nav.Link>    
          
            <span style={{marginLeft:"30px",fontSize:"20px",fontWeight:"bold",fontFamily:"roboto"}}>
            <NavDropdown    title= <span className='tittle1'>Integractions </span> id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link}to={"/Features"}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </span>


            <span style={{marginLeft:"53px",fontSize:"20px",fontWeight:"bold",fontFamily:"roboto"}}>
            <NavDropdown   title= <span className='tittle1'>Customers </span>  id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link}to={"/Customers"}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </span>

            <span style={{marginLeft:"30px",fontSize:"20px",fontWeight:"bold",fontFamily:"roboto"}}>
            <NavDropdown  title= <span className='tittle1'>Resources </span>     id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link}to={"/Resources"}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </span>

            <Nav.Link style={{marginLeft:"50px",fontSize:"20px",fontWeight:"bold",fontFamily:"roboto"}} as={Link}to={"/Login"} >  <span className='tittle1'>Login </span>  </Nav.Link>    

          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
    <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/Pricing">
            <Pricing />
          </Route>
          <Route path="/Features">
            <Features />
          </Route>

          <Route path="/Customers">
            <Customers />
          </Route>
          <Route path="/Resources">
            <Resources />
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
        </Switch>
    </div>
    </Router>
  )
}

export default Navbar1