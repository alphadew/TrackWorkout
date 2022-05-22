import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import './home.css'

function Home() {
  return (
    <div>
        <h1>Track Workout</h1>
        <Container className = "container">
        <Row>
            <Col>Add Workout</Col>
            <Col>View Workout</Col>
        </Row>
        </Container>     

    </div>
  )
}

export default Home