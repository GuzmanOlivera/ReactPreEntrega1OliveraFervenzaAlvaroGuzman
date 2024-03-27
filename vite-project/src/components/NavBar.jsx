import { MenuOutlined } from '@ant-design/icons';
import CartWidget from './CartWidget';
import logo from '../img/logo.jpg';

const NavBar = () => {
    return (
        <header className="nav-bar">
            <h1 id="title" className="mainTitle">CodeBook Emporium</h1>
            <a href="/" className="logo-container">
                <img src={logo} alt="Logo" className="logo-img"/>
            </a>
            <nav className="nav-menu">
                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <a href="#">Inicio</a>
                    <a href="#">Libros</a>
                    <a href="#">Contacto</a>
                </div>
                {/* Mobile menu */}
                <MenuOutlined className="mobile-menu md:hidden" />
            </nav>
            <div className="md:hidden"> 
                <CartWidget />
            </div>
        </header>
    );
};

export default NavBar;
