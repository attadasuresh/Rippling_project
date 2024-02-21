import React from 'react';
import './Navbar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Pricing from './Pricing';
import Features from './Features';
import Hr from './Hr';
import Customers from './Customers';
import Resources from './Resources';
import Login from './Login';
import Home from './Home';
import It from './It';
import Finance from './Finance';
import Register from './Register';
import Employe from './Employe';
import Admin from './Admin';
import Protect from './Protect';
import Hrlogin from './Hrlogin'
import EmployeRegister from './EmployeRegister'
import Hremploye from './Hremploye'


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
        <Navbar.Brand href="#home"  as={Link}to={"/Home"}><img style={{height:"50px",borderRadius:"10px"}} src="images\image_2024_01_31T20_17_18_633Z.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto" >


          <span  style={{ marginLeft:"50px",fontSize:"20px",fontWeight:"bold",fontFamily:"roboto"}}><NavDropdown  title= <span className='tittle1'>Products </span> id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link}to={"/Hr"}>
          <span className='span20'>HR CLOUD</span></NavDropdown.Item>
              <NavDropdown.Item as={Link}to={"/It"}>
              <span className='span20'>IT CLOUD</span>
              </NavDropdown.Item>
              <NavDropdown.Item as={Link}to={"/Finance"}><span className='span20'>FINANCE CLOUD</span></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               ABOUT
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
              <NavDropdown.Item   as={Link}to={"/Register"}>Register</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </span>

            <span style={{marginLeft:"30px",fontSize:"20px",fontWeight:"bold",fontFamily:"roboto"}}>
            <NavDropdown  title= <span className='tittle1'>HR LOGIN</span>     id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link}to={"/Resources"}>Action</NavDropdown.Item>
              <NavDropdown.Item  as={Link}to={"/Hrlogin"}>
              Hrlogin
              </NavDropdown.Item>
              <NavDropdown.Item as={Link}to={"/Employe"}>Employe</NavDropdown.Item>
              <NavDropdown.Item as={Link}to={"/EmployeRegister"}>EmployeRegister</NavDropdown.Item>
              <NavDropdown.Item as={Link}to={"/Hremploye"}>Hremploye</NavDropdown.Item>


              <NavDropdown.Divider />
              <NavDropdown.Item as={Link}to={"/Admin"}>
              Admin
              </NavDropdown.Item>
            </NavDropdown>
            </span>


            <Nav.Link style={{marginLeft:"50px",fontSize:"20px",fontWeight:"bold",fontFamily:"roboto"}} as={Link}to={"/Login"} >    <span className='tittle1'>Login </span>  </Nav.Link>


          </Nav>
          
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
    <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Hr" component={Hr}/>
          <Route path="/Register">
            <Register/>
          </Route>
          <Route path="/It">
            <It/>
          </Route>
          <Route path="/Finance">
            <Finance/>
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

          <Route path="/Hrlogin" component={Hrlogin}/>
          <Route path="/Login" component={Login}/>
          <Protect path="/Employe" component={Employe}/>
          <Protect path="/EmployeRegister" component={EmployeRegister}/>
          <Protect path="/Hremploye" component={Hremploye}/>


          <Route path="/Admin">
            <Admin/>
          </Route>
          
        </Switch>
    </div>
    </Router>
  )
}

export default Navbar1