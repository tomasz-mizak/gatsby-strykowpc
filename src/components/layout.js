import React from "react";
import { Link } from "gatsby";
import "../styles/app.scss";
import Mirror from '../images/mirror.jpg';

const Layout = ({children}) => {
  return (
    <main className="App">
      <header className="App-header">
        <div className="App-header__name">
          <h1>StrykówPC</h1>
          <p>Serwis komputerowy, usługi informatyczne.</p>
        </div>
        <div className="App-header__navigation">
          <ul>
            <li>
              <Link to="/" activeClassName="Link--active">Strona główna</Link>
            </li>
            <li>
              <Link to="/cennik/" activeClassName="Link--active">Cennik usług</Link>
            </li>
            <li>
              <Link to="/kontakt/" activeClassName="Link--active">Kontakt</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="App-image"></div>
      <section className="App-content">
        {children}
      </section>
      <footer className="App-footer">
        <div className="App-footer__copyrights">
          <small>All rights reserved &copy; 2022, StrykówPC</small>
        </div>
      </footer>
    </main>
  )
}

export default Layout; 