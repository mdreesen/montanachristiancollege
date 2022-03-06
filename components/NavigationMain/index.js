import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import styles from '../../styles/Navbar.module.css';

// Importing Data
import navDropdownData from '../../utils/navMainDropdownLinks.json';

export default function NavigationMain() {
    // console.log('dropdown data', navDropdownData?.dropdownLinks)
    return (
        <Navbar className={styles.navMain} variant="dark">
            <Container>
                <Nav className="justify-content-center">
                    {
                        navDropdownData?.dropdownLinks?.map((link, index) => {
                            return (
                                <NavDropdown title={link?.name} id="basic-nav-dropdown" key={`nav-main-key-${link?.name}-${index}`}>
                                    {
                                        link?.dropdownLink?.map((item, jndex) => {
                                            return (
                                                <NavDropdown.Item href="#action/3.2" key={`nav-main-key-dropdown-link-${item?.dropdownName}-${jndex}`}>{item?.dropdownName}</NavDropdown.Item>
                                            );
                                        })
                                    }
                                </NavDropdown>
                            )
                        })
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}