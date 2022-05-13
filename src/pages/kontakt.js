import * as React from "react";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <h2>Skontaktuj się z nami</h2>
      <p><b>Tomasz Mizak</b><br/>tel. 512-294-324<br/>email. serwis@strykowpc.pl</p>
      <b className="warning--red">Kontakt poza godzinami 10:00 - 21:00 w wyjątkowych sytuacjach.</b>
      {/* <h3>lub zgłoś się po wycenę korzystając z poniższego formularza:</h3>
      <form>
        <label className="error"></label>
        <div className="form-group horizontal">
          <label>Imię</label>
          <input type="text"></input>
        </div>
        <div className="form-group horizontal">
          <label>Numer telefonu</label>
          <input type="text"></input>
        </div>
        <div className="form-group horizontal">
          <label>Adres email</label>
          <input type="text"></input>
        </div>
        <div className="form-group horizontal">
          <label>Opis problemu</label>
          <textarea></textarea>
        </div>
        <input type="submit" value="Wyślij zgłoszenie"/>
      </form> */}
    </Layout>
  )
}

export default ContactPage
