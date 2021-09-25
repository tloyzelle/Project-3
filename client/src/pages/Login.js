import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header"

function Login(props) {
  /*const [gig, setGig] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getGig(id)
      .then(res => setGig(res.data))
      .catch(err => console.log(err));
  }, []) */


  return (
    
      <Container fluid>
        <Header>
        </Header>
        <div>
        <h3 className="text-center">Please Log In</h3>
        </div>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
         
        </Row>
     </Container>
    );
  }; 


export default Login;
