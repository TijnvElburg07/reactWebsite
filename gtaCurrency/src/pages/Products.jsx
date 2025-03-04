import Header from '../components/Header.jsx'
import ProductCards from '../components/ProductCards.jsx'
import './css/Products.css'

function Products() {
    return (
      <>
        <Header title="Producten" />
        <div className="product-cards-container">
          <ProductCards name="Lorem" description="Lorem ipsum dolor sit amet." />
          <ProductCards name="Lorem2" description="Lorem ipsum dolor sit amet." />
          <ProductCards name="Lorem3" description="Lorem ipsum dolor sit amet." />
          <ProductCards name="Lorem4" description="Lorem ipsum dolor sit amet." />
          <ProductCards name="Lorem5" description="Lorem ipsum dolor sit amet." />
          <ProductCards name="Lorem6" description="Lorem ipsum dolor sit amet." />
          <ProductCards name="Lorem7" description="Lorem ipsum dolor sit amet." />
          <ProductCards name="Lorem8" description="Lorem ipsum dolor sit amet." />
          <ProductCards name="Lorem9" description="Lorem ipsum dolor sit amet." />
        </div>
      </>
    );
  }

export default Products;