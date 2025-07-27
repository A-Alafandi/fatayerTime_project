import { useState, useMemo } from 'react';
import '../../main.css';
import ItemDetailsModal from './ItemDetailsModal';
import { menu } from '../Menu/menuItems';

function MenuPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => menu, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderBadges = (item) => {
    const badges = [];
    if (item.isVegetarian) {
      badges.push(
        <span key="veg" className="menu-badge badge-veg">
          🥗 Vegetarian
        </span>,
      );
    }
    if (item.isSpicy) {
      badges.push(
        <span key="spicy" className="menu-badge badge-spicy">
          🌶️ Spicy
        </span>,
      );
    }
    return badges;
  };

  // Keyboard handler for accessible overlay click
  const handleOverlayKeyDown = (e, item) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleItemClick(item);
    }
  };

  return (
    <>
      <section id="menu" className="menu section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Menu</h2>
          <p>Check Our Tasty Menu</p>
        </div>
        <div
          className="container isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <div className="row isotope-container" data-aos="fade-up" data-aos-delay="200">
            {menu.length === 0 && (
              <div className="col-12">
                <div className="menu-alert-warning">
                  No menu items found. Please check back later.
                </div>
              </div>
            )}

            {filteredItems.length > 0 &&
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`col-lg-6 menu-item isotope-item filter-${item.category?.toLowerCase() || 'other'}`}
                >
                  <div className="menu-img-container">
                    <img
                      src={item.imageUrl || '/placeholder.svg?height=80&width=80'}
                      className="menu-img"
                      alt={item.name}
                    />
                    {/* Accessible overlay for opening details */}
                    <div
                      className="menu-img-overlay"
                      role="button"
                      tabIndex={0}
                      onClick={() => handleItemClick(item)}
                      onKeyDown={(e) => handleOverlayKeyDown(e, item)}
                      style={{ cursor: 'pointer' }}
                      title="View details"
                      aria-label={`View details for ${item.name}`}
                    >
                      <span className="menu-img-icon">👁️</span>
                    </div>
                  </div>
                  <div className="menu-content">
                    <button
                      type="button"
                      onClick={() => handleItemClick(item)}
                      className="menu-item-button"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--heading-color)',
                        fontWeight: '700',
                        cursor: 'pointer',
                        padding: 0,
                        textAlign: 'left',
                        fontSize: 'inherit',
                        fontFamily: 'inherit',
                      }}
                    >
                      {item.name}
                    </button>
                    <span>€{typeof item.price === 'number' ? item.price.toFixed(2) : '-'}</span>
                  </div>
                  <div className="menu-ingredients">
                    {Array.isArray(item.ingredients) && item.ingredients.length > 0
                      ? item.ingredients.join(', ')
                      : item.description || 'Delicious and fresh'}
                  </div>
                  {(item.isVegetarian || item.isSpicy) && (
                    <div className="menu-badges">{renderBadges(item)}</div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {selectedItem && (
          <ItemDetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </section>
    </>
  );
}

export default MenuPage;
