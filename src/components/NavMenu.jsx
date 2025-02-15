import "./NavMenu.scss";
import logo from "../images/netflix.png";
import { FaAlignJustify } from "react-icons/fa6";
import { useState } from "react";
import data from "../data";

const NavMenu = () => {
	const [showMenu, setOpenMenu] = useState(false);

	return (
		<div className="navmenu">
			<div className="container">
				<img src={logo} alt="" />
				<button onClick={() => setOpenMenu(!showMenu)}> {FaAlignJustify()}</button>
			</div>

			<ul className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
				{data.map(({ id, url, text }) => (
					<li key={id}>
						<a href={url}>{text}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavMenu;
