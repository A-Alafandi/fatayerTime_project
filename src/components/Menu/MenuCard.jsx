import PropTypes from "prop-types"
import "../../main.css"

function MenuCard({ item, onClick }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onClick(item)
    }
  }

  const handleClick = (e) => {
    e.stopPropagation()
    onClick(item)
  }

  return (
    <div className="menu-card" onClick={handleClick} onKeyDown={handleKeyDown} tabIndex={0} role="button">
      <div className="menu-card-image">
        <img
          src={item.imageUrl || `/placeholder.svg?height=200&width=300&query=${item.name}`}
          alt={item.name}
          loading="lazy"
        />
      </div>
      <div className="menu-card-content">
        <h3 className="menu-card-title">{item.name}</h3>
        <p className="menu-card-category">{item.category}</p>
        <p className="menu-card-description">{item.description}</p>
        <div className="menu-card-footer">
          <span className="menu-card-price">€{typeof item.price === "number" ? item.price.toFixed(2) : "-"}</span>
          <div className="menu-card-badges">
            {item.isVegetarian && <span className="badge-vegetarian">V</span>}
            {item.isSpicy && <span className="badge-spicy">🌶️</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

MenuCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    isVegetarian: PropTypes.bool,
    isSpicy: PropTypes.bool,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MenuCard
