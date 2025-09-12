import { useState } from "react";
import { NavLink } from "react-router-dom";
import logotype from "../media/logo/logo.png";
import menuIcon from "../media/icons/menu-icon.png";
import closeIcon from "../media/icons/close-icon.png";

export const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="w-full shadow-sm">
			<div className="flex justify-between items-center py-4 px-6 md:px-10">
				<div>
					<img src={logotype} alt="logo" className="h-10" />
				</div>

				<div className="hidden md:flex gap-10">
					<NavLink to="/home">Home</NavLink>
					<NavLink to="/products">Products</NavLink>
					<NavLink to="/features">Features</NavLink>
					<NavLink to="/pricing">Pricing</NavLink>
				</div>

				<div className="hidden md:flex gap-4">
					<button className="[border:1px_solid_lightgray] text-secondary px-6 py-2 font-semibold rounded-lg">
						Sign in
					</button>
					<button className="bg-primary text-white font-semibold px-6 py-2 rounded-lg">Sign up free</button>
				</div>

				<button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
					<img src={isOpen ? closeIcon : menuIcon} alt="menu" className="h-8 w-8" />
				</button>
			</div>

			{isOpen && (
				<div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white shadow-md">
					<NavLink to="/home" onClick={() => setIsOpen(false)}>
						Home
					</NavLink>
					<NavLink to="/products" onClick={() => setIsOpen(false)}>
						Products
					</NavLink>
					<NavLink to="/features" onClick={() => setIsOpen(false)}>
						Features
					</NavLink>
					<NavLink to="/pricing" onClick={() => setIsOpen(false)}>
						Pricing
					</NavLink>

					<div className="flex flex-col gap-4 w-full px-6">
						<button className="[border:1px_solid_lightgray] text-secondary px-6 py-2 font-semibold rounded-lg w-full">
							Sign in
						</button>
						<button className="bg-primary text-white font-semibold px-6 py-2 rounded-lg w-full">
							Sign up free
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};
