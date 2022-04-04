import * as React from "react";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <h2>Kontakt</h2>
      <p><b>Tomasz Mizak</b><br/>tel. 512-294-324<br/>email. serwis@strykowpc.pl</p>
      <h3>Poproś o wycenę korzystając z poniższego formularza</h3>
      <iframe title="Formularz wyceny" src="https://docs.google.com/forms/d/e/1FAIpQLSe8vnDMvDZVQYokPzj83dbxcoo9IKAnleLGbz81rZBF1ygRCg/viewform?embedded=true" width="640" height="998" frameborder="0" marginheight="0" marginwidth="0">Ładuję…</iframe>
    </Layout>
  )
}

export default ContactPage
