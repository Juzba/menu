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
		<div>
			<div className="navmenu">
				<img src={logo} alt="" />

				{size > 550 ? (
					<ul className="menu">
						{data.map(({ id, url, text }) => {
							return (
								<a key={id} href={url}>
									{text}
								</a>
							);
						})}
					</ul>
				) : (
					<button onClick={() => setOpenMenu(!openMenu)} className="btn-menu">
						{FaAlignJustify()}
					</button>
				)}
			</div>

			{openMenu && size < 550 && (
				<ul className="smallmenu">
					{data.map(({ id, url, text }) => {
						return (
							<a key={id} href={url}>
								{text}
							</a>
						);
					})}
				</ul>
			)}
		</div>
	);
};

export default NavMenu;
