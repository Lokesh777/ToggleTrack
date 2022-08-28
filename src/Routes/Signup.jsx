import styles from "./SignUp.module.css"
import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

class Signup extends Component {
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

  onSignupClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    console.log("Sign up " + userData.username + " " + userData.password);
    window.location.href="/login"
  };

  render() {
    return (
      
      <div className={styles.WholeSignupCompDiv}>
          {/* <div>
            <Navbar/>
          </div> */}
            <h1 className={styles.toggle} onClick={()=>navigate("/")}>toggl 
                 <span className={styles.track}>track</span> 
            </h1>

            <h1 className={styles.toggleHeadLine}>Sign up for a <em>free</em> Toggl Track account</h1>

            <p>All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required.<br/>
              Upgrade at the end of the trial or continue using Track for free forever.</p>
   
            <p>Already have an account? <a href="/login">Log in here</a>.</p>
 
          <div className={styles.SignupCardMainBox}>
             <div>
                <Container>
           
                <Row>
                  <Col md="4">
                    <div className={styles.SignUpIcons}>
                      <button><img src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="Icon" /> <b>Sign up via Google</b> </button>
                      <button><img src="https://cdn-icons-png.flaticon.com/512/731/731985.png" alt="Icon" /> <b>Sign up via Apple</b> </button>
                    </div>
                    
                    <hr className={styles.OrSignUp}/>
                    <br />

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

                      <Form.Group controlId="passwordId">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          value={this.password}
                          onChange={this.onChange}
                        />
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                      </Form.Group>
                    </Form>
                   <br/>
            
                    <Button 
                     color="primary"
                     onClick={this.onSignupClick}  
                    >Sign up</Button>
                    <br /><br />
                    <p className={styles.TermAndPrivacy}>
                    By signing up, you agree to our <a href="#">terms of service, privacy<br /> 
                    policy</a>  and to receiving   marketingcommunication from Toggl<br />  
                    Track. You can opt out anytime.
                    </p>
                  </Col>
                  <Col >
                  <div className={styles.secondCardOfSignUP}>
                         <b>“</b>
                        <h2 >Toggl Track has a very straightforward <br />
                            interface. It's easy to start, stop and edit <br />
                            time entries and to review your own <br />
                            work and the work of colleagues. <br /><br />

                          <em> It just works</em> , even in a team where <br />
                            some members find new interfaces <br />
                            challenging.</h2> <br />


                    <p>— Verified G2Crowd review. 5/5 stars.</p> <br /> <br /> <br />

                    <img src="https://public-assets.toggl.com/b/static/6b5c09dd5baafcca069103cd517b38c9/4e194/review-badges.webp" alt="catperaa" />
                  </div>
                
                  </Col>
                </Row>

              </Container>
             
             </div>
             
             
          </div>

            <div className={styles.LastInSignUp}>
                <p>© 2022 Toggl. All rights reserved.</p>
                 <a href="#">Legal Terms</a>
              </div>


        {/* <div>
          <Footer/>
        </div> */}
      </div>
    
    );
  }
}

export default Signup;