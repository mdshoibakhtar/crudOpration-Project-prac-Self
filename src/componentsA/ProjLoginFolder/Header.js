import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../ProjLoginFolder/LoginAll.css"
export const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto navigation">
                        <Link to="/dashbord" >Dashbord</Link>
                        <Link >Student</Link>
                        <Link >Contact form</Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}