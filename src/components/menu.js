import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export const Menu = (props) => {
  return (
    <Navbar bg='light' expand='lg' {...props}>
      <Container>
        <Navbar.Brand href='#'>Dashboard</Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#'>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
