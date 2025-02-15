/** @format */

import "./NavMenu.scss";
import logo from "../images/netflix.png";
import { FaAlignJustify } from "react-icons/fa6";
import { useEffect, useState } from "react";
import data from "../data";

const NavMenu = () => {
	const [size, setSize] = useState(window.innerWidth);
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(
		(timer) => {
			window.addEventListener("resize", () => {
				if (!timer) {
					timer = setTimeout(() => {
						console.log("sdffsd");
						setSize(window.innerWidth);
						if (openMenu && size > 550) setOpenMenu(false);
					}, 100);
				}
			});
		},
		[size, openMenu]
	);

	return (
		<div className="navmenu">
			<div className="container">
				<img src={logo} alt="" />
				<button className="btn-menu"> {FaAlignJustify()}</button>
			</div>
			<ul className="menu">
				{data.map(({ id, url, text }) => (
					<li>
						<a key={id} href={url}>
							{text}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavMenu;
