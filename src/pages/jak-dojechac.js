import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Emplacement = () => {
  return (
    <Layout>
      <Seo title="Jak dojechać" keywords={['lokalizacja', 'trasa', 'stryków']} />
      <h1>Nasz serwis mieści się w Strykowie</h1>
      <p>Jeżeli wcześniej umówiłeś się na dostawę sprzętu do serwisu, użyj poniższej mapy by wyznaczyć trasę.</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.7801532475332!2d19.59977675135249!3d51.90147603953433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471bc976de2d00b3%3A0x3351352ca4192411!2sSerwis%20Komputerowy%20-%20Stryk%C3%B3wPC!5e0!3m2!1spl!2spl!4v1652645009005!5m2!1spl!2spl" style={{border: 0, height: '400px', width: '100%', margin: 0, padding: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Layout>
  )
}

export default Emplacement
