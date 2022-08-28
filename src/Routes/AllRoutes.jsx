
import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";

class AllRoutes extends Component {
  render() {
    return (
    //   <Container>
    //     <h1>AllRoutes</h1>
    //     <p>
    //       <Link to="/login/">Login</Link>
    //     </p>
    //     <p>
    //       <Link to="/signup">Sign up</Link>
    //     </p>
    //     <p>
    //       <Link to="/dashboard">Dashboard</Link>
    //     </p>
    //   </Container>
         <Routes>
                 <Route  path="/" element={<Home/>} />
                 <Route path="/signup" element={<Signup/>} />
                 <Route path="/login" element={<Login/>} />
                {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
            </Routes>
    );
  }
}

export default AllRoutes;