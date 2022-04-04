import * as React from "react";
import Layout from "../components/layout";

const PricingPage = () => {
  return (
    <Layout>
      <h2>Cennik</h2>
      <p>Ceny zawarte w poniższej tabeli mają charakter poglądowy.<br/>Niektóre usługi nie zostały uwzględnione, prosimy o kontakt telefoniczny, jeżeli Państwa wymagania nie mieszczą się w poniższej reprezentacji.</p>
      <table>
        <tr>
          <th>Usługa</th>
          <th>Opis</th>
          <th width="12%">Cena</th>
        </tr>
        <tr>
          <td>Czyszczenie urządzenia</td>
          <td>Obejmuje wymianę pasty termoprzewodzącej na układach CPU i GPU, czyszczenie pozostałych elementów obudowy oraz wentylatorów (jeżeli możliwe, rozebranie i ponowne smarowanie).</td>
          <td>100 zł</td>
        </tr>
        <tr>
          <td>Odzyskiwanie danych</td>
          <td>Próba odzyskania informacji usuniętych bądź utraconych z nośnika.</td>
          <td>150 zł</td>
        </tr>
        <tr>
          <td>Montaż</td>
          <td>Złożenie komputera stacjonarnego, bądź modyfikacja obecnych podzespołów do wyznaczonego budżetu zgodnie z obecnymi trendami mocy obliczeniowej.</td>
          <td>40-100 zł</td>
        </tr>
        <tr>
          <td>Instalacja systemu operacyjnego</td>
          <td>Czysta instalacja lub przeniesienie z dysku na dysk - najczęściej w przypadku ulepszeń HDD na SSD.</td>
          <td>45 zł</td>
        </tr>
        <tr>
          <td>Zabezpieczenie danych</td>
          <td>Dotyczy umieszczenia danych w chmurze, cena zależna jest od zużywanego miejsca. Wykonywane są również klony dysków, umieszczanie danych na zewnętrznych nośnikach, czy szkolenia z zabezpieczania danych.</td>
          <td>~ 100 zł</td>
        </tr>
        <tr>
          <td>Usuwanie hasła z systemu windows</td>
          <td>Na niezabezpieczonych dyskach - bez bitlocker'a.</td>
          <td>30 zł</td>
        </tr>
        <tr>
          <td>Szkolenia (zdalne)</td>
          <td>Programowanie C#, Java, C++, JavaScript - korepetycje oraz kompletne kursy z podstaw programowania dla szkół podstawowych, liceów, techników oraz studiów.</td>
          <td>od 80 zł</td>
        </tr>
      </table>

    </Layout>
  )
}

export default PricingPage
