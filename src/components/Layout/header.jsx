import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logos/kasa.png';

function Header() {
    const current = useLocation().pathname;

    return (
        <header>
            <img src={logo} alt="Logo Kasa" className="header-media"/>
            <nav className="header-nav">
                <Link to="/" className={current == "/" ? "current" : ""}>Accueil</Link>
                <Link to="/a-propos" className={current == "/a-propos" ? "current" : ""}>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header
