import * as React from "react";
import Layout from "../components/layout";

const PricingPage = () => {
  return (
    <Layout>
      <h2>Cennik</h2>
      <p>Ceny zawarte w poniższej tabeli mają charakter poglądowy.<br/>Niektóre usługi nie zostały uwzględnione, prosimy o kontakt telefoniczny, jeżeli Państwa wymagania nie mieszczą się w poniższej reprezentacji.</p>
      <table>
        <tr>
          <th width="80%">Usługa</th>
          <th width="20%">Cena</th>
        </tr>
        <tr>
          <td>Konserwacja urządzenia (więcej niżej)</td>
          <td>100 zł</td>
        </tr>
        <tr>
          <td>Odzyskiwanie danych</td>
          <td>150 zł</td>
        </tr>
        <tr>
          <td>Wymiana klawiatury w laptopie</td>
          <td>20 zł</td>
        </tr>
        <tr>
          <td>Wymiana matrycy w laptopie</td>
          <td>50 zł</td>
        </tr>
        <tr>
          <td>Wymiana obudowy laptopa</td>
          <td>40 zł</td>
        </tr>
        <tr>
          <td>Instalacja systemu operacyjnego wraz z sterownikami i oprogramowaniem</td>
          <td>45 zł</td>
        </tr>
        <tr>
          <td>Zabezpieczenie danych</td>
          <td>~ 100 zł</td>
        </tr>
        <tr>
          <td>Usuwanie hasła z systemu windows</td>
          <td>30 zł</td>
        </tr>
        <tr>
          <td>Szkolenia (zdalne)</td>
          <td>od 80 zł</td>
        </tr>
      </table>
      {/* <p className="warning--red"></p> */}
    </Layout>
  )
}

export default PricingPage
