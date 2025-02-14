import "./NavMenu.scss";
import logo from "../images/netflix.png";
import { FaAlignJustify } from "react-icons/fa6";
import { useEffect, useState } from "react";

const NavMenu = () => {
	const [size, setSize] = useState(window.innerWidth);
	const [openMenu, setOpenMenu] = useState(false);
    

	useEffect((timer) => {
		window.addEventListener("resize", () => {
            if(!timer){
               timer = setTimeout(() => {
                    console.log("sdffsd");
                    setSize(window.innerWidth);
                }, 250);
            }
		});
	
	}, [size]);

	return (
		<div>
			<div className='navmenu'>
				<img src={logo} alt='' />
				{size > 500 ? (
					<div className='menu'>
						<a href='sf'>Domů</a>
						<a href='sf'>Pořady</a>
						<a href='sf'>Filmy</a>
						<a href='sf'>Můj seznam</a>
					</div>
				) : (
					<button onClick={() => setOpenMenu(!openMenu)} className='btn-menu'>
						{FaAlignJustify()}
					</button>
				)}
			</div>
			{openMenu && size < 500 && (
				<div className='smallmenu'>
					<a href='sf'>Domů</a>
					<a href='sf'>Pořady</a>
					<a href='sf'>Filmy</a>
					<a href='sf'>Můj seznam</a>
				</div>
			)}
		</div>
	);
};

export default NavMenu;
