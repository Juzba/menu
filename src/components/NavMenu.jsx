import './NavMenu.scss';
import logo from '../images/netflix.png';
import { FaAlignJustify } from "react-icons/fa6";

const NavMenu = () => {
    return (
        <div className='navmenu'>
            <img src={logo} alt='' />
            <div className='menu'>
                <a href='sf'>Domů</a>
                <a href='sf'>Pořady</a>
                <a href='sf'>Filmy</a>
                <a href='sf'>Můj seznam</a>
                <button>{FaAlignJustify()}</button>
            </div>
        </div>
    );
};

export default NavMenu;
