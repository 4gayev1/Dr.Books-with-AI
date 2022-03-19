import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';


const Navigationbar = () => {
  return (
    <Navbar bg="light" expand="md">
    <Container fluid>
    <Navbar.Brand href="#">Dr.Book</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">

      <Nav className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>

        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Books">Book Page</Nav.Link>
    
        <Nav.Link href="/About">
          About Us
        </Nav.Link>

        


      </Nav>

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>

      <Nav.Link href="/Cart">
          Cart
        </Nav.Link>

      <Nav.Link href="/login">
          Login / Sign Up
        </Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>

  )
}

export default Navigationbar;