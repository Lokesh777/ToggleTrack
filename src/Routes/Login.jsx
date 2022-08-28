import styles from "./login.module.css"
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";
import Footer from "../Component/Footer/Footer";
import Navbar from "../Component/Navbar/Navbar";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("Login " + userData.username + " " + userData.password);
    alert("Thank you for successfully Login!")
    window.location.href="/"
  };
  render() {
    return (
        <div className={styles.LogInWholeSignupCompDiv}>
            <div>
                <Navbar/>
            </div>
                
                <div className={styles.LogInSignupCardMainBox}>
                  <div>
                        <Container>
                    <Row>
                      <Col md="4">
                       
                    <div className={styles.LogInSignUpIcons}>
                      <button><img src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="Icon" /> <b>Log in via Google</b> </button>
                      <button><img src="https://cdn-icons-png.flaticon.com/512/731/731985.png" alt="Icon" /> <b>Log in via Apple</b> </button>
                    </div>
                    
                    <br /> <br /><br />
                        <Form>
                          <Form.Group controlId="usernameId">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="text"
                              name="username"
                              placeholder="Enter user name"
                              value={this.state.username}
                              onChange={this.onChange}
                            />
                            <FormControl.Feedback type="invalid"></FormControl.Feedback>
                          </Form.Group>
                  <br />
                          <Form.Group controlId="passwordId">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              placeholder="Enter password"
                              value={this.state.password}
                              onChange={this.onChange}
                            />
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                          </Form.Group>
                          <br />
                        </Form>
                         <p className={styles.LogInForgetPass}>Forgot password?</p>
                        <Button color="primary" onClick={this.onLoginClick}>Login</Button>
                        <br />  <br />
                      
                      </Col>
                    </Row>
                         </Container>

                  </div>

                      
                 
                </div>
                  <div>
                      <p className={styles.LogInLinkTosignUp}>
                              Don't have an account? <br /> <br /> <Link to="/signup"> <button className={styles.LogInLinkTosignUpbtn}>Signup</button>   </Link>
                      </p>
                  </div>

                          
             <div>
                <Footer/>
             </div>
             <br /><br />
        </div>
    
    );
  }
}

export default Login;