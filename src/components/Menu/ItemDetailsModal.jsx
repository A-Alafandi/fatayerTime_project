"use client"

import { useEffect } from "react"
import PropTypes from "prop-types"
import "../../main.css"

function ItemDetailsModal({ item, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [onClose])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content" role="dialog" aria-labelledby="modal-title" aria-modal="true">
        <div className="modal-header">
          <h2 id="modal-title">{item.name}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-image">
            <img
              src={item.imageUrl || `/placeholder.svg?height=300&width=400&query=${item.name}`}
              alt={item.name}
              loading="lazy"
            />
          </div>

          <div className="modal-details">
            <p className="modal-description">{item.description}</p>

            {item.ingredients && item.ingredients.length > 0 && (
              <div className="modal-ingredients">
                <h3>Ingredients:</h3>
                <p>{item.ingredients.join(", ")}</p>
              </div>
            )}

            <div className="modal-price">€{typeof item.price === "number" ? item.price.toFixed(2) : "-"}</div>

            <div className="modal-badges">
              {item.isVegetarian && <span className="menu-badge badge-veg">🥗 Vegetarian</span>}
              {item.isSpicy && <span className="menu-badge badge-spicy">🌶️ Spicy</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ItemDetailsModal.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
    isVegetarian: PropTypes.bool,
    isSpicy: PropTypes.bool,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ItemDetailsModal
