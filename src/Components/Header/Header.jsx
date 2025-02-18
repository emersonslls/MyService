import React, { useState } from 'react';

/* <----- CSS -----> */
import styles from '../../Styles/Components/Header/Header.module.css';

/* <----- ASSETS -----> */
import LogoBlue from '../../Assets/Logos/LogoMySserviceBlue.png';
import Menu from '../../Assets/Icons/Menu.svg';
import Close from '../../Assets/Icons/Close.svg';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para o menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <header>
            <img
                src={LogoBlue}
                onClick={() => scrollToSection('home')}
                alt="Logo"
                className={styles.logo}
            />
            <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                <ul>
                    <li onClick={() => scrollToSection('apps')}>Aplicativos</li>
                    <li onClick={() => scrollToSection('premium')}>Premium</li>
                    <li onClick={() => scrollToSection('sobre')}>Sobre</li>
                    <li onClick={() => scrollToSection('redes')}>Redes sociais</li>
                    <li onClick={() => scrollToSection('equipe')}>Equipe</li>
                </ul>
                <button className={styles.buttonContact}>Contato</button>
            </nav>
            <button className={styles.hamburger} onClick={toggleMenu}>
                {isMenuOpen ? (
                    <img src={Close} className={styles.closeIcon} />
                ) : (
                    <img src={Menu} alt="Menu Icon" className={styles.menuIcon} />
                )}
            </button>
        </header>
    );
}

export default Header;
