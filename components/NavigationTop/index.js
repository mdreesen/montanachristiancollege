import { Navbar, Nav, Container, Button } from "react-bootstrap";
import styles from '../../styles/Navbar.module.css';

export default function NavigationTop() {
    return (
        <Navbar className={styles.navbar} bg="light" variant="light">
            <Container>
                <Nav className="justify-content-start">
                    <Nav.Link href="#Request">Request Info</Nav.Link>
                    <Nav.Link href="#Visit">Visit</Nav.Link>
                    <Nav.Link href="#Covid">Covid-19</Nav.Link>
                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Link href="#Invest">Invest In MCC</Nav.Link>
                    <Nav.Link href="#Faculty">Our Faculty</Nav.Link>
                    <Nav.Link href="#MCC">My MCC</Nav.Link>
                    <Nav.Link href="#Canvas">Canvas</Nav.Link>
                    {/* <Button variant="primary" size="lg">
                        Apply Now
                    </Button> */}
                </Nav>
            </Container>
        </Navbar>
    )
}