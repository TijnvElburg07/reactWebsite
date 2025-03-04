import Header from '../components/Header.jsx'
import ProductCards from '../components/ProductCards.jsx'

function Products() {
  return (
    <>
        <Header title="Producten" />
        <ProductCards name="Lorem" description="Lorem ipsum dolor sit amet." />
        <ProductCards name="Lorem2" description="Lorem ipsum dolor sit amet." />
        <ProductCards name="Lorem3" description="Lorem ipsum dolor sit amet." />
    </>
  );
}

export default Products;