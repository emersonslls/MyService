import React, { useState, useEffect } from 'react';

/* <----- CSS -----> */
import styles from '../../Styles/Components/Footer/Footer.module.css';

/* <----- ASSETS -----> */
import LogoWhite from '../../Assets/Logos/LogoMySserviceWhite.png';
import BackgroundStars from '../../Assets/BackgroundFooter.png';
import ServiceCo from '../../Assets/Icons/ServiceCo.svg';
import Email from '../../Assets/Icons/Mail.svg';
import Emerson from '../../Assets/Emerson.png';

function Footer() {

    return (
        <footer>
            <img src={BackgroundStars} className={styles.Background} />
            <img src={LogoWhite} className={styles.Logo} />
            <nav className={styles.NavFooter}>
                <li>Brasil</li>
                <li>Política de Privacidade</li>
                <li>Termos de Uso</li>
                <li>Ajuda</li>
            </nav>
            <section className={styles.Rodape}>
                <div className={styles.Informations}>
                    <div className={styles.Empresa}>
                        <img src={ServiceCo} />
                        <div className={styles.Mail}>
                            <img src={Email} />
                            <h1>
                                myservice@suporte.com
                            </h1>
                        </div>
                    </div>
                    <a href="https://emersonsalesdev.vercel.app" target='_blank'>
                        <div className={styles.Dev}>
                            <img src={Emerson} />
                        </div>
                    </a>
                </div>
            </section>
            <section className={styles.Direitos}>
                <h1>© Todos os direitos reservados - My Service</h1>
            </section>
        </footer>
    );
}

export default Footer;
