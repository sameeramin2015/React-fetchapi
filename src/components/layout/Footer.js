import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export default function Footer() {
  return (
   <Container className="bg-dark" fluid={true}>
       <Row  className="justify-content-center text-light text-center col-md-12">
           <Col md={12}><h2>Footer</h2></Col>
       </Row>
   </Container>
  )
}
