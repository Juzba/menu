import './NavMenu.scss';
import logo from '../images/netflix.png';
import { FaAlignJustify } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

const NavMenu = () => {
    const [size, setSize] = useState(0)

useEffect(()=>{
    setSize(window.innerWidth)
    console.log("useeffect")
})

    return (
        <div>
            <div className='navmenu'>
                <img src={logo} alt='' />
                <div className='menu'>
                    <p>{size}</p>
                    <a href='sf'>Domů</a>
                    <a href='sf'>Pořady</a>
                    <a href='sf'>Filmy</a>
                    <a href='sf'>Můj seznam</a>
                    <button>{FaAlignJustify()}</button>
                </div>
            </div>
            <div className='smallmenu'>
            <a href='sf'>Domů</a>
                <a href='sf'>Pořady</a>
                <a href='sf'>Filmy</a>
                <a href='sf'>Můj seznam</a>
            </div>
        </div>
    );
};

export default NavMenu;
