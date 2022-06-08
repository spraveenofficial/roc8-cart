import { useNavigate } from "react-router-dom";
import ProductCard from "../../Components/ProductCard";
import { useCart } from "../../Context/cart-context";
import products from "../../Utils/product";
import "./style.css";
export default function Home() {
  const { cart } = useCart();
  console.log(cart);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/cart");
  };

  return (
    <>
      <button onClick={handleNavigate} className="btn main-page-btn">
        <i className="fas fa-shopping-cart"></i>
        <p>Goto Cart</p>
      </button>
      <div className="main products">
        {products.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
      </div>
    </>
  );
}
