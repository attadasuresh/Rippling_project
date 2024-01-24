import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Pricing from './Pricing';
import Features from './Features';
import Products from './Products';
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
   
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> <span style={{color:"red"}}> React-Bootstrap </span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">


          <span style={{marginLeft:"70px",fontSize:"20px",fontWeight:"bold"}}><NavDropdown  title="Products" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link}to={"/Products"}>Products</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown></span>

    
            <Nav.Link style={{marginLeft:"40px",fontSize:"20px",fontWeight:"bold"}} as={Link}to={"/Pricing"} >Pricing</Nav.Link>    
          
            <span style={{marginLeft:"50px",fontSize:"20px",fontWeight:"bold"}}>
            <NavDropdown   title="Integractions" id="collapsible-nav-dropdown">
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



            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
    <Switch>
          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/Pricing">
            <Pricing />
          </Route>
          <Route path="/Features">
            <Features />
          </Route>
        </Switch>
    </div>
    </Router>
  )
}

export default Navbar1