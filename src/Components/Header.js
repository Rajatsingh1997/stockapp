import React from 'react'
import "./Header.css";
import {Card,Container,CardDeck} from "react-bootstrap";
import google from '../Assets/GOOGL.png';
import facebook from '../Assets/FB.png';
import amazon from '../Assets/AMZN.svg';

function Header() {
    return (
        <div className="mt-4">
        <Container>
<CardDeck>
  <Card>
    <Card.Body>
      <Card.Title> <div className="insidecard">
        <div>GOOGL</div>
        <div><img src={google} className="google"/></div>
    </div></Card.Title>
      <Card.Text>
      <div className="centerWord">1515 USD</div>
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>
   
    <Card.Body>
      <Card.Title>
      <div className="insidecard">
        <div>FB</div>
        <div><img src={facebook} className="google"/></div>
    </div>
      </Card.Title>
      <Card.Text>
      <div className="centerWord">266 USD</div>
      </Card.Text>
    </Card.Body>
  
  </Card>
  <Card>
   
    <Card.Body>
      <Card.Title>
      <div className="insidecard">
        <div>AMZN</div>
        <div><img src={amazon} className="google"/></div>
    </div>
      </Card.Title>
      <Card.Text>
      <div className="centerWord">3116 USD</div>
      </Card.Text>
    </Card.Body>
 
  </Card>
</CardDeck>
</Container>
        </div>
    )
}

export default Header
