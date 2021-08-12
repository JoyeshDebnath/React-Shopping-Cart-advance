import React from "react";
import {
	Navbar,
	Container,
	FormControl,
	Dropdown,
	Badge,
	Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import StorefrontIcon from "@material-ui/icons/Storefront";

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>
					<Link to="/">
						<StorefrontIcon />
						JD SHOPPING-CART
					</Link>
				</Navbar.Brand>
				<Navbar.Text className="search">
					<FormControl
						style={{ width: 500 }}
						className="m-auto"
						placeholder="Search a product"
					/>
				</Navbar.Text>
				<Nav>
					<Dropdown alignRight>
						<Dropdown.Toggle variant="success">
							<IoIosCart color="white" fontSize="25px" />
							<Badge>{10}</Badge>
						</Dropdown.Toggle>
						<Dropdown.Menu style={{ minWidth: 370 }}>
							<span style={{ padding: 10 }}>Cart is Empty</span>
						</Dropdown.Menu>
					</Dropdown>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
