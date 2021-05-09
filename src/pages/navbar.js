import React from "react"
import {Navbar, NavDropdown, Nav}  from 'react-bootstrap';

export default function NavBar() {

	return <Navbar className="navbar navbar-default animated">
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />

					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="collapse navbar-collapse justify-content-end" id="top-menu">
							<Nav.Link className="text-uppercase text-center" href="#about">Home</Nav.Link>
							<Nav.Link className="text-uppercase text-center" href="#coding-experience">Coding Experience</Nav.Link>
							<Nav.Link className="text-uppercase text-center" href="#contact">Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>

				</Navbar>
}
