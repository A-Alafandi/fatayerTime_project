import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container text-center">
        <h1 className="display-1">404</h1>
        <h2>Pagina niet gevonden</h2>
        <p className="lead">Sorry, de pagina die u zoekt bestaat niet of is verplaatst.</p>
        <Link to="/" className="btn btn-primary">
          <i className="bi bi-house-fill me-2"></i>
          Terug naar Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
