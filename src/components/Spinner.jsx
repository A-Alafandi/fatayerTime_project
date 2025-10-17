import PropTypes from "prop-types"

const Spinner = ({ size = "medium", className = "" }) => {
  const sizeClass = size === "large" ? "large" : ""

  return (
    <div className={`spinner ${sizeClass} ${className}`} role="status" aria-label="Loading">
      <span className="sr-only">Loading...</span>
    </div>
  )
}

Spinner.propTypes = {
  size: PropTypes.oneOf(["medium", "large"]),
  className: PropTypes.string,
}

export default Spinner
