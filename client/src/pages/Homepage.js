import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components/index";
import Header from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";


function Gigs() {

  // Setting our component's initial state
  const [gigs, setGigs] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all gigs and store them with setBooks
  useEffect(() => {
    loadGigs()
  }, [])

  // Loads all gigs and sets them to gigs
  function loadGigs() {
    API.getGigs()
      .then(res => 
        setGigs(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a gig from the database with a given id, then reloads gigs from the db
 /* function deleteGig(id) {
    API.deleteGig(id)
      .then(res => loadGigs())
      .catch(err => console.log(err));
  } */

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveGig method to save the gig data
  // Then reload gigs from the database



  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.description) {
      API.saveGig({
        name: user.name,
        title: formObject.title,
        description: formObject.description,
        date: formObject.date,
        payment: formObject.payment,
        contact: formObject.contact,
        
      })
      .then(() => setFormObject({
       
        title: "",
        description: "",
        date: "",
        payment: ""
      }))
        .then(res => loadGigs())
        .catch(err => console.log(err));
    }
  };

  const { user, isAuthenticated } = useAuth0();

    return (
      isAuthenticated && (
      <div>
      <Header />
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add a Gig</h1>
            </Jumbotron>
            <form>

              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
                value={formObject.title}
              />
              <Input
                onChange={handleInputChange}
                name="description"
                placeholder="Description (required)"
                value={formObject.description}
              />
              <Input
                onChange={handleInputChange}
                name="date"
                placeholder="Date (required)"
                value={formObject.date}
              />
              <Input
                onChange={handleInputChange}
                name="payment"
                placeholder="Payment (optional)"
                value={formObject.payment}
              />
               <Input
                onChange={handleInputChange}
                name="contact"
                placeholder="Contact (required)"
                value={formObject.contact}
              />
              <FormBtn
                onClick={handleFormSubmit}
              >
                Submit Job
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1> Gigs List</h1>
            </Jumbotron>
            {gigs.length ? (
              <List>
                {gigs.map(gig => (
                  <ListItem key={gig._id}>
                    <Link to={"/gigs/" + gig._id}>
                      <strong>
                       {gig.title} by {user.name}
                      </strong>
                      </Link>
                      <p><strong>Date:</strong> {gig.date}</p>                    
                    {/* <DeleteBtn onClick={() => deleteGig(gig._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
      </div>

    ));
    }


    export default withAuthenticationRequired(Gigs, {
      onRedirecting: () => <Loading />,
    });
