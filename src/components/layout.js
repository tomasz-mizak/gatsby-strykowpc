import React from "react";
import { Link } from "gatsby";
import "../styles/app.scss";
import Mirror from '../images/mirror.jpg';
import { Helmet } from "react-helmet";
import { FaFacebook } from 'react-icons/fa';

const Layout = ({children}) => {
  return (
    <main className="App">
      <Helmet>
        <meta name="title" content="Naprawa laptopów i komputerów stacjonarnych w Strykowie." />
        <meta name="description" content="Szukasz serwisu komputerowego? Twój laptop nie działa? Trafiłeś/łaś idealnie, zajmujemy się profesjonalną naprawą i konserwacją sprzętu komputerowego na terenie Strykowa i okolic. Oferujemy usługi w konkurencyjnych cenach, zadzwoń już dziś! Odbierzemy Twój sprzęt oraz w ekspresowym tempie zajmiemy się jego naprawą." />
        <meta property="og:title" content="Naprawa laptopów i komputerów w miejscowości Stryków" />
        <meta property="og:url" content="https://www.strykowpc.pl/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Szukasz serwisu komputerowego? Twój laptop nie działa? Trafiłeś/łaś idealnie, zajmujemy się profesjonalną naprawą i konserwacją sprzętu komputerowego na terenie Strykowa i okolic. Oferujemy usługi w konkurencyjnych cenach, zadzwoń już dziś! Odbierzemy Twój sprzęt oraz w ekspresowym tempie zajmiemy się jego naprawą." />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:image" content={Mirror} />
        <title>Naprawa laptopów i komputerów Stryków - StrykówPC</title>
      </Helmet>
      <header className="App-header">
        <div className="App-header__name">
          <h1><a rel="canonical" href="https://www.strykowpc.pl/" className="App-header__canonical">Serwis komputerowy Stryków</a></h1>
          <p>Profesjonalne naprawy sprzętu komputerowego w konkurencyjnych cenach.</p>
        </div>
        <div className="App-header__navigation">
          <ul>
            <li>
              <Link to="/" activeClassName="Link--active" rel="canonical">Strona główna</Link>
            </li>
            <li>
              <Link to="/cennik/" activeClassName="Link--active">Cennik usług</Link>
            </li>
            <li>
              <Link to="/kontakt/" activeClassName="Link--active">Kontakt</Link>
            </li>
            <li>
              <Link to="/jak-dojechac/" activeClassName="Link--active">Jak dojechać?</Link>
            </li>
          </ul>
        </div>
      </header>
      <img src="https://i.imgur.com/dqbl4Se.jpg" alt="Banner ujmujący gniazdo procesora wraz z nim." title="Zdjęcie z bliska płyty głównej laptopa." className="App-image" />
      <section className="App-content">
        {children}
      </section>
      <footer className="App-footer">
        <div className="App-footer__socials">
          <ul>
            <li>
              <a href="https://www.facebook.com/StrykowPC" rel="norefferer">
                <FaFacebook />
                <span>Polub nas na Facebooku!</span>
            </a></li>
          </ul>
        </div>
        <div className="App-footer__copyrights">
          <small>All rights reserved &copy; 2022, StrykówPC</small>
        </div>
      </footer>
    </main>
  )
}

export default Layout; 