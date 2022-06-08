import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PathVariable from '../../gobal/PathVariable';

const AppNavBar = () => {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand as={Link} to={PathVariable.MAIN_VIEW_PATH}>
            Navbar
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to={PathVariable.TEST_VIEW_PATH}>
              Test
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.TEST_VIEW_PATH_2}>
              Test2
            </Nav.Link>
            <Nav.Link as={Link} to={PathVariable.LOGIN_VIEW_PATH}>
              Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavBar;
