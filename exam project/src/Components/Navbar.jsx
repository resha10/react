import { useAuth } from '../AuthContext';

const NavigationBar = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">BlogTyrant Clone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {isAuthenticated && <Nav.Link as={Link} to="/add">Add Post</Nav.Link>}
            {isAuthenticated ? (
              <Button variant="outline-light" onClick={logout}>Logout</Button>
            ) : (
              <Button variant="outline-light" onClick={login}>Login</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
