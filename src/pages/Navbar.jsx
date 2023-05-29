import { NavLink } from "react-router-dom";
import { usePizzaContext } from "../context/PizzaConextProv"
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';

export const Navbar = () => {
    const { cartTotal } = usePizzaContext();

	return (
		<div className="bg-dark d-flex justify-content-between sticky-top border-bottom border-warning navbar shadowBox">
			<NavLink to={"/"} className="navLink">
				<div className="d-flex p-2 flex-grow-1 justify-content-center align-items-center pt-3">
					<img src="./repartidorIcon.png" alt="pizza" className="iconPizza ms-5" />
					<h4>Pizzeria Mamma Mia!</h4>
				</div>
			</NavLink>
			<NavLink to={"/cart"} className="navLink">
				<div className="d-flex justify-content-end align-items-center me-5">
					<i className="bi bi-cart3 fs-3"></i>
					<h4 className="pt-1">Total: $ {cartTotal}</h4>
				</div>
			</NavLink>
		</div>
	);
}