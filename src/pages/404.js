import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Nie znaleziono</title>
      <h1 style={headingStyles}>Podstrona nie istnieje.</h1>
      <p style={paragraphStyles}>
        Przepraszamy{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        nie mogliśmy znaleźć tego czego szukasz.
        {/* <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null} */}
        <br />
        <Link to="/">Kliknij i wróć do strony głównej</Link>
      </p>
    </main>
  )
}

export default NotFoundPage
