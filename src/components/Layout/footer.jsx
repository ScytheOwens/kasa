import logo from '../../assets/logos/kasa-white.png';

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Logo Kasa" className="footer-media"/>
            <p className="footer-legals">@ 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer