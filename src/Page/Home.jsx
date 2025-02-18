/* <-----  CSS'S -----> */
import styles from '../Styles/Page/Home.module.css';
import { sectionHome, sectionApps, sectionPremium, sectionSobre, sectionRedes, sectionEquipe } from "../Styles/Page/Partials/index.js";
import '../Styles/Global/Global.css';


/* <-----  COMPONENTES -----> */
import Header from '../Components/Header/Header.jsx';
import Footer from "../Components/Footer/Footer.jsx";

/* <----- AOS ANIMATIONS -----> */
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Não se esqueça de importar o CSS

/* <----- ASSETS -----> */
import Mao from '../Assets/Imagens Ilustativas/Mao.png';
import Vector from '../Assets/Icons/Vector.svg';
import AppUser from '../Assets/Imagens Ilustativas/Mockups/MockupPhoneUserScreen.png';
import AppWork from '../Assets/Imagens Ilustativas/Mockups/MockupPhoneWorkScreen.png';
import ScreenPremium from '../Assets/Imagens Ilustativas/Mockups/MockupPremiumScreen.png';
import Background from '../Assets/BackgroundVector.png';
import Check from '../Assets/Icons/Check.svg';
import Person from '../Assets/Icons/Person.svg';
import Image from '../Assets/Icons/Image.svg';
import Assessment from '../Assets/Icons/Assessment.svg';
import IconInsta from '../Assets/Icons/IconInsta.svg';
import IconX from '../Assets/Icons/IconX.svg';
import ProfileInstaScreen from '../Assets/Imagens Ilustativas/Mockups/MockupProfileInstaScreen.png';
import ProfileXScreen from '../Assets/Imagens Ilustativas/Mockups/MockupProfileXScreen.png';
import VectorStar from '../Assets/Icons/VectorStar.svg';

function MyServicePage() {

    useEffect(() => {
        // Inicializa o AOS
        AOS.init({
            duration: 2000, // Duração das animações
        });
    }, []);

    const sobre = useRef();
    function scrollTo(ref) {
        window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
    }

    const equipe = useRef();
    function scrollTo(ref) {
        window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });
    }

    return (
        <>
            {/* <---- HEADER ----> */}
            <Header />
            {/* <---- HOME ----> */}
            <section className={sectionHome.Home} id='home'>
                <div className={sectionHome.ContainerTextHome} data-aos="fade-right">
                    <div className={sectionHome.TextsHome}>
                        <h1>Descubra o que<span> fazemos&nbsp;</span>e<span>&nbsp;aproveite</span> uma experiência<span> incomparável de qualidade.</span></h1>
                        <h2>Para obter mais<span>&nbsp;informações sobre nós&nbsp;</span>e compreender nossa essência, clique no<span>&nbsp;botão abaixo&nbsp;</span>e descubra quem somos e por que estamos dedicados a esse<span>&nbsp;tema.</span></h2>
                    </div>
                    <button onClick={() => scrollTo(sobre)} className={sectionHome.ButtonLearnMore} >
                        Saiba mais
                    </button>
                </div>
                <img src={Mao} className={sectionHome.ImageIlustrationMao} data-aos="fade-up" />
            </section>

            {/* <---- APLICATIVOS ---->  */}
            <section className={sectionApps.Apps} id='apps'>
                <div className={sectionApps.ContainerTextApps} data-aos="fade-up" >
                    <h1><span>Impulsione&nbsp;</span>suas vendas com nossos <span>Aplicativos Inovadores!</span></h1>
                    <h2>Divulgue seus <span>produtos&nbsp;</span>e<span>&nbsp;serviços,</span> contrate ou compre de forma rápida e simples com nossos<span>&nbsp;aplicativos.</span></h2>
                </div>
                <svg width="290" height="39" viewBox="0 0 290 39" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43 13.0757C43 11.7573 43.9 10.6885 45.0101 10.6885H100.678C116.189 10.6885 131.143 17.5588 142.615 29.9564L145.124 32.6667L147.411 30.1951C158.883 17.7975 173.837 10.9272 189.348 10.9272H245.016C246.126 10.9272 247.026 11.996 247.026 13.3144C247.026 14.6329 246.126 15.7017 245.016 15.7017H189.348C174.838 15.7017 160.849 22.1288 150.116 33.7265L147.525 36.5273C146.132 38.0326 143.999 38.0171 142.622 36.4915L139.91 33.4878C129.177 21.8901 115.189 15.463 100.678 15.463H45.0101C43.9 15.463 43 14.3942 43 13.0757Z" fill="url(#paint0_linear_868_1365)" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.38193C0 1.51414 1.27494 0 2.84766 0H81.7109C103.685 0 124.869 9.733 141.122 27.2962L144.675 31.1359L147.915 27.6344C164.168 10.0712 185.352 0.338193 207.326 0.338193H286.19C287.762 0.338193 289.037 1.85233 289.037 3.72012C289.037 5.58791 287.762 7.10205 286.19 7.10205H207.326C186.77 7.10205 166.953 16.2071 151.748 32.6372L148.077 36.605C146.103 38.7375 143.082 38.7155 141.131 36.5543L137.289 32.299C122.085 15.8689 102.267 6.76385 81.7109 6.76385H2.84766C1.27494 6.76385 0 5.24971 0 3.38193Z" fill="url(#paint1_linear_868_1365)" />
                    <defs>
                        <linearGradient id="paint0_linear_868_1365" x1="43" y1="24.9399" x2="247.026" y2="24.9399" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0E6AC7" stop-opacity="0" />
                            <stop offset="0.5" stop-color="#0E6AC7" />
                            <stop offset="1" stop-color="#0E6AC7" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_868_1365" x1="0" y1="20.1895" x2="289.037" y2="20.1895" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#062C80" stop-opacity="0" />
                            <stop offset="0.5" stop-color="#062C80" />
                            <stop offset="1" stop-color="#062C80" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>

                <section className={sectionApps.ConatinerMyServiceUser}>
                    <img src={AppUser} data-aos="fade-right" />
                    <div className={sectionApps.InformationsAppUser} data-aos="fade-left">
                        <div className={sectionApps.TextsAppUser}>
                            <h1>
                                My service User
                            </h1>
                            <div className={sectionApps.OnAppUser}>
                                <h2>Baixe nosso <span>app&nbsp;</span>agora e aproveite uma<span>&nbsp;experiência incrível!</span></h2>
                                <h3>My Service <span>facilita a conexão entre&nbsp;</span>clientes <span>e</span> profissionais. <span>Clientes contratam</span> serviços <span>e</span> compartilham experiências, <span>enquanto profissionais mostram seus</span> trabalhos <span>e</span> encontram novas oportunidades.</h3>
                            </div>
                        </div>
                        <button>Adquira agora <img src={Vector} /></button>
                    </div>
                </section>

                <section className={sectionApps.ConatinerMyServiceWork}>
                    <img src={AppWork} data-aos="fade-left" />
                    <div className={sectionApps.InformationsAppWork} data-aos="fade-right">
                        <div className={sectionApps.TextsAppWork}>
                            <h1>
                                My service Work
                            </h1>
                            <div className={sectionApps.OnAppWork}>
                                <h2>Baixe o <span>app work&nbsp;</span>agora e aproveite todos os <span>benefícios!</span></h2>
                                <h3>My Service work <span>fornece&nbsp;</span>estátisticas <span>de faturamento e</span> feedback <span>de clientes, permitindo que fornecedores monitorem seu desempenho, avaliem a satisfação e tomem decisões estratégicas para melhorar e expandir</span> seus negócios. </h3>
                            </div>
                        </div>
                        <button>Adquira agora <img src={Vector} /></button>
                    </div>
                </section>

            </section>

            {/* <---- PREMIUM ----> */}
            <section className={sectionPremium.Premium} id='premium'>
                <img src={Background} className={sectionPremium.BackgroundPremium} />
                <div className={sectionPremium.ContainerTextPremium} data-aos="fade-up" >
                    <h1>Assine nossos <span>planos premium&nbsp;</span>e aproveite <span>benefícios exclusivos!</span></h1>
                    <h2>Oferecemos <span>três planos excluisvos&nbsp;</span>para fornecedores de serviços, cada um com benefícios e recursos únicos. Confira os detalhes e escolha o ideal<span>&nbsp;para você!</span></h2>
                </div>
                <svg width="290" height="39" viewBox="0 0 290 39" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43 13.0757C43 11.7573 43.9 10.6885 45.0101 10.6885H100.678C116.189 10.6885 131.143 17.5588 142.615 29.9564L145.124 32.6667L147.411 30.1951C158.883 17.7975 173.837 10.9272 189.348 10.9272H245.016C246.126 10.9272 247.026 11.996 247.026 13.3144C247.026 14.6329 246.126 15.7017 245.016 15.7017H189.348C174.838 15.7017 160.849 22.1288 150.116 33.7265L147.525 36.5273C146.132 38.0326 143.999 38.0171 142.622 36.4915L139.91 33.4878C129.177 21.8901 115.189 15.463 100.678 15.463H45.0101C43.9 15.463 43 14.3942 43 13.0757Z" fill="url(#paint0_linear_868_1365)" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.38193C0 1.51414 1.27494 0 2.84766 0H81.7109C103.685 0 124.869 9.733 141.122 27.2962L144.675 31.1359L147.915 27.6344C164.168 10.0712 185.352 0.338193 207.326 0.338193H286.19C287.762 0.338193 289.037 1.85233 289.037 3.72012C289.037 5.58791 287.762 7.10205 286.19 7.10205H207.326C186.77 7.10205 166.953 16.2071 151.748 32.6372L148.077 36.605C146.103 38.7375 143.082 38.7155 141.131 36.5543L137.289 32.299C122.085 15.8689 102.267 6.76385 81.7109 6.76385H2.84766C1.27494 6.76385 0 5.24971 0 3.38193Z" fill="url(#paint1_linear_868_1365)" />
                    <defs>
                        <linearGradient id="paint0_linear_868_1365" x1="43" y1="24.9399" x2="247.026" y2="24.9399" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0E6AC7" stop-opacity="0" />
                            <stop offset="0.5" stop-color="#0E6AC7" />
                            <stop offset="1" stop-color="#0E6AC7" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_868_1365" x1="0" y1="20.1895" x2="289.037" y2="20.1895" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#062C80" stop-opacity="0" />
                            <stop offset="0.5" stop-color="#062C80" />
                            <stop offset="1" stop-color="#062C80" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <section className={sectionPremium.ContainerPremiumPlans}>
                    <img src={ScreenPremium} data-aos="fade-right" />
                    <div className={sectionPremium.ContainerPlanos} data-aos="fade-left">
                        <h1>Premium Planos</h1>
                        <div className={sectionPremium.Planos} data-aos="fade-up">
                            <div className={sectionPremium.Bronze}>
                                <img src={Check} />
                                <div className={sectionPremium.InfoPlans}>
                                    <h2>
                                        Plano <span>Bronze</span>
                                    </h2>
                                    <h3>
                                        Por apenas <span>R$9,99/mês,</span> desbloqueie <span>recursos exclusivos</span> para impulsionar seu perfil e ampliar sua <span>visibilidade</span> na <span> plataforma!</span>
                                    </h3>
                                </div>
                            </div>
                            <div className={sectionPremium.Prata}>
                                <img src={Check} />
                                <div className={sectionPremium.InfoPlans}>
                                    <h2>
                                        Plano <span>Prata</span>
                                    </h2>
                                    <h3>
                                        Por <span>R$24,99/mês,</span> tenha destaque em buscas, <span>avaliações aprimoradas</span> e <span>maior visibilidade</span>  para atrair mais clientes.
                                    </h3>
                                </div>
                            </div>
                            <div className={sectionPremium.Diamante}>
                                <img src={Check} />
                                <div className={sectionPremium.InfoPlans}>
                                    <h2>
                                        Plano <span>Diamante</span>
                                    </h2>
                                    <h3>
                                        Por <span>R$79,99/mês,</span> tenha destaque nas buscas, <span>posicionamento privilegiado </span>e<span> suporte prioritário</span> para impulsionar seus <span> negócios.</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <p data-aos="fade-left">Escolha o <span>plano premium</span> ideal e aproveite todos os <span>recursos</span> e <span>vantagens</span> para <span>impulsionar seu negócio.</span></p>
            </section>

            {/* <---- SOBRE ----> */}
            <section className={sectionSobre.Sobre} id='sobre' ref={sobre}>
                <div className={sectionSobre.ContainerTextSobre} data-aos="fade-up" >
                    <div className={sectionSobre.TextSobre}>
                        <h1>Quem somos, <span>qual nossa&nbsp;</span>missão <span>e o que nos</span> motiva.</h1>
                        <h2>Somos um grupo de <span>desenvolvedores juniores&nbsp;</span>apaixonados por tecnologia,<span>&nbsp;criando soluções</span> inovadoras para<span>&nbsp;conectar pessoas</span> e<span>&nbsp;promover serviços.</span>  Com um aplicativo e site completos, oferecemos recursos como<span>&nbsp;perfis personalizados, busca avançada </span>e <span>avaliações,</span> ajudando nossos usuários a expandirem <span>seus negócios.</span></h2>
                    </div>
                    <button onClick={() => scrollTo(equipe)}>Conheça a equipe</button>
                </div>
                {/* <---- MOTIVOS ----> */}
                <section className={sectionSobre.ContainerMotivos}>
                    <div className={sectionSobre.ContainerTextMotivos} data-aos="fade-up" >
                        <h1>Quais os<span> motivos&nbsp;</span>de escolhermos esse <span>tema?</span></h1>
                        <h2>Optamos por este tema porque acreditamos no poder da tecnologia para facilitar a conexão entre pessoas e profissionais. Nossa plataforma, o <span> My Service</span>, foi projetada para oferecer soluções práticas e eficazes para quem busca serviços e para os profissionais autônomos. Queríamos criar um ambiente onde os usuários pudessem ter:</h2>
                    </div>
                    <section className={sectionSobre.ContainerTopicsMotivos}>
                        <div className={sectionSobre.PerfisDetalhados} data-aos="flip-right">
                            <img src={Person} />
                            <h1>
                                Perfis <span>detalhados:</span>
                            </h1>
                            <h2>
                                Profissionais destacam suas habilidades, projetos anteriores e experiência, permitindo uma apresentação completa de suas capacidades.
                            </h2>
                        </div>
                        <div className={sectionSobre.VisualizacaoDeImagens} data-aos="flip-right" >
                            <img src={Image} />
                            <h1>
                                Visualização de <span>imagens:</span>
                            </h1>
                            <h2>
                                Clientes podem conferir exemplos do trabalho realizado, ajudando a tomar uma decisão mais assertiva na escolha do profissional ideal.
                            </h2>
                        </div>
                        <div className={sectionSobre.AvaliacoesDeClientes} data-aos="flip-right">
                            <img src={Assessment} />
                            <h1>
                                Avaliações de <span>clientes:</span>
                            </h1>
                            <h2>
                                Feedbacks honestos e transparentes, garantindo uma escolha mais informada e confiável, tanto para clientes quanto para prestadores de serviços.
                            </h2>
                        </div>
                    </section>
                </section>
            </section>

            {/* <---- REDES SOCIAIS ----> */}
            <section className={sectionRedes.Redes} id='redes'>
                <section className={sectionRedes.ContainerRedes} >
                    <div className={sectionRedes.InformationRedes} data-aos="fade-right">
                        <div className={sectionRedes.TextRedes}>
                            <h1>
                                Conecte-se <span>com a gente nas </span>redes sociais e descubra tudo o que temos a <span>oferecer!</span>
                            </h1>
                            <h2>
                                Acompanhe nossas <span>novidades, dicas </span>e <span>atualizações</span> para ficar por dentro de tudo o que estamos fazendo!
                            </h2>
                        </div>
                        <div className={sectionRedes.IconsRedes}>
                            <img src={IconInsta} />
                            <img src={IconX} />
                        </div>
                    </div>
                    <img src={ProfileInstaScreen} className={sectionRedes.ProfileInsta} data-aos="fade-up-right" />
                    <img src={ProfileXScreen} className={sectionRedes.ProfileX} data-aos="fade-up-left" />
                </section>
            </section>

            {/* <---- EQUIPE ----> */}
            <section className={sectionEquipe.Equipe} id='equipe' ref={equipe}>
                <div className={sectionEquipe.ContainerTextEquipe} data-aos="fade-up" >
                    <h1>Conheça-nos <span>e descubra </span>quem somos</h1>
                    <h2>Explore nossa equipe e saiba como cada membro contribuiu para o sucesso deste aplicativo e a landing page.</h2>
                </div>
                <svg width="290" height="39" viewBox="0 0 290 39" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43 13.0757C43 11.7573 43.9 10.6885 45.0101 10.6885H100.678C116.189 10.6885 131.143 17.5588 142.615 29.9564L145.124 32.6667L147.411 30.1951C158.883 17.7975 173.837 10.9272 189.348 10.9272H245.016C246.126 10.9272 247.026 11.996 247.026 13.3144C247.026 14.6329 246.126 15.7017 245.016 15.7017H189.348C174.838 15.7017 160.849 22.1288 150.116 33.7265L147.525 36.5273C146.132 38.0326 143.999 38.0171 142.622 36.4915L139.91 33.4878C129.177 21.8901 115.189 15.463 100.678 15.463H45.0101C43.9 15.463 43 14.3942 43 13.0757Z" fill="url(#paint0_linear_868_1365)" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.38193C0 1.51414 1.27494 0 2.84766 0H81.7109C103.685 0 124.869 9.733 141.122 27.2962L144.675 31.1359L147.915 27.6344C164.168 10.0712 185.352 0.338193 207.326 0.338193H286.19C287.762 0.338193 289.037 1.85233 289.037 3.72012C289.037 5.58791 287.762 7.10205 286.19 7.10205H207.326C186.77 7.10205 166.953 16.2071 151.748 32.6372L148.077 36.605C146.103 38.7375 143.082 38.7155 141.131 36.5543L137.289 32.299C122.085 15.8689 102.267 6.76385 81.7109 6.76385H2.84766C1.27494 6.76385 0 5.24971 0 3.38193Z" fill="url(#paint1_linear_868_1365)" />
                    <defs>
                        <linearGradient id="paint0_linear_868_1365" x1="43" y1="24.9399" x2="247.026" y2="24.9399" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#0E6AC7" stop-opacity="0" />
                            <stop offset="0.5" stop-color="#0E6AC7" />
                            <stop offset="1" stop-color="#0E6AC7" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_868_1365" x1="0" y1="20.1895" x2="289.037" y2="20.1895" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#062C80" stop-opacity="0" />
                            <stop offset="0.5" stop-color="#062C80" />
                            <stop offset="1" stop-color="#062C80" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <section className={sectionEquipe.Membros} >
                    <div className={sectionEquipe.Camily} data-aos="flip-up">
                        <div className={sectionEquipe.InfoMembro}>
                            <img src={VectorStar} />
                            <div className={sectionEquipe.DadosMember}>
                                <h1>
                                    Camily <span>Nascimento</span>
                                </h1>
                                <h2>
                                    <span>Camily</span> foi nossa <span>líder</span>, coordenando o projeto com excelência. Ela contribuiu no desenvolvimento do <span>back-end</span> e também ofereceu suporte importante no  <span>front-end.</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className={sectionEquipe.Emerson} data-aos="flip-up">
                        <div className={sectionEquipe.InfoMembro}>
                            <img src={VectorStar} />
                            <div className={sectionEquipe.DadosMember}>
                                <h1>
                                    Emerson <span>Sales</span>
                                </h1>
                                <h2>
                                    <span>Emerson</span> foi o responsável pelo <span>design</span> e pela prototipação de nossos <span>aplicativos</span> e da <span>landing page.</span> Além disso, ele também trabalhou no desenvolvimento do <span>front-end</span> da landing page.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className={sectionEquipe.Joao} data-aos="flip-up">
                        <div className={sectionEquipe.InfoMembro}>
                            <img src={VectorStar} />
                            <div className={sectionEquipe.DadosMember}>
                                <h1>
                                    João Pedro <span>Martins</span>
                                </h1>
                                <h2>
                                    <span>João</span>  foi o responsável pelo desenvolvimento do <span>back-end</span> e ele também colaborou no <span>front-end</span> dos aplicativos, ajudando a criar uma <span>interface eficiente.</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className={sectionEquipe.Jose} data-aos="flip-up">
                        <div className={sectionEquipe.InfoMembro}>
                            <img src={VectorStar} />
                            <div className={sectionEquipe.DadosMember}>
                                <h1>
                                    José <span>Vinícius</span>
                                </h1>
                                <h2>
                                    <span>José</span>  foi o nosso <span>sublíder</span> e atuou como <span>front-end</span> nos aplicativos. Além disso, contribuiu no desenvolvimento da <span>API</span> e no <span>Banco de dados</span> dos projetos.
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}

export default MyServicePage;
