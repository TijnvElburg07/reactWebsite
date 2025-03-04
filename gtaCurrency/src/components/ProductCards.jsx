import './css/ProductCard.css'

function ProductCards({ name, description }) {
    return (
      <div className="product-card-wrapper">
          <div className="product-card">
              <h2>{name}</h2>
              <p>{description}</p>
          </div>
          <div className="product-card">
              <h2>{name}</h2>
              <p>{description}</p>
          </div>
          <div className="product-card">
              <h2>{name}</h2>
              <p>{description}</p>
          </div>
          <div className="product-card">
              <h2>{name}</h2>
              <p>{description}</p>
          </div>
      </div>
    );
  }
  
  export default ProductCards;
  