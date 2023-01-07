import { Container, Nav, Navbar } from "react-bootstrap"
import { Provider } from "react-redux"
import { Link, Navigate, Route, Routes } from "react-router-dom"
import { myStore } from "../store&slice/store"
import { ContactComp } from "./ContactComp"
import { ContactForm } from "./ContactForm"
import { DataView } from "./DataView"
export const ProviderApp = () => {
    return (
        <div>
            <Navbar bg="black">
                <Container>
                    <Nav className="me-auto">
                        <Link style={{ textDecoration: "none", fontSize: "20px" }} to="/contacts">contact</Link>
                    </Nav>
                </Container>
            </Navbar>
            <Provider store={myStore}>
                <Routes>
                    <Route path="/" element={<Navigate to="/contacts" />} />
                    <Route path="contacts" element={<ContactComp />} />
                    <Route path="/edit/:id" element={<ContactForm />} />
                    <Route path="/view/:id" element={<DataView />} />
                </Routes>
            </Provider>
        </div>
    )
}