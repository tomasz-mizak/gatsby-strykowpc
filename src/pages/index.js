import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <h2>Zakres usług</h2>
      <p>Zajmujemy się naprawą i konserwacją sprzętu komputerowego - serwisem laptopów oraz komputerów stacjonarnych. Oferujemy montaż oraz ulepszanie sprzętu komputerowego. Profesjonalne usługi w konkurencyjnych cenach.</p>
      <p>Konserwacje wykonujemy z największą starannością. Czyszczenie układów chłodzenia, obudowy urządzenia w każdym zakamarku czy wymiana pasty termoprzewodzącej, a to tylko podstawy oferowanych usług.</p>
      <h2>Dostępność</h2>
      <p>Odbiór urządzenia od klienta lub serwis na miejscu. Na tą chwilę nie prowadzimy usług z możliwością wejścia do serwisu.</p>
      <p>Pracujemy całodobowo, jednach w godzinach innych niż zakres 8:00 - 20:00 cena za usługę liczona jest podwójnie - w sytuacjach możliwych do zrealizowania na miejscu, w innym przypadku sprzęt jest za zgodą klienta zabierany na serwis, a liczona jest tylko cena za dojazd.</p>
    </Layout>
  )
}

export default IndexPage
