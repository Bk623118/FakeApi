
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../productSlice";
import { addTowishList } from "../wishlistSlice";
import { incrementView } from "../productPageSlice";

const ProductPage = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarProducts, setSimilarProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const totalViews = useSelector(state => state.views.items[id] || 0);

  // Fetch product details
  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
        dispatch(incrementView(id));

        // Fetch similar products based on category
        if(res.data.category?.id){
          axios.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${res.data.category.id}`)
            .then((resp) => {
              const filtered = resp.data.filter(p => p.id !== res.data.id);
              setSimilarProducts(filtered);
            })
            .catch(err => console.error("Error fetching similar products:", err));
        }
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found!</p>;

  return (
<div className="product-page-container">
  <button onClick={() => navigate(-1)} className="btn-back">⬅ Back</button>

  <div className="product-details">
    <div className="product-image">
      <img 
        src={product.images && product.images[0] ? product.images[0] : "https://via.placeholder.com/300"} 
        alt={product.title} 
      />
    </div>

    <div className="product-info">
      <h1 className="product-title">{product.title}</h1>
      <p className="product-description">{product.description}</p>
      <h2 className="product-price">₹{product.price.toFixed(2)}</h2>
      <p className="product-views">👀 Total Views: {totalViews}</p>

      <div className="product-actions">
        <button className="btn btn-buy">Buy Now</button>
        <button className="btn btn-cart" onClick={()=>dispatch(add(product))}>Add to Cart</button>
        <button className="btn btn-wishlist" onClick={()=>dispatch(addTowishList(product))}>Add to Wishlist</button>
      </div>
    </div>
  </div>

  {similarProducts.length > 0 && (
    <div className="similar-products-section">
      <h2>Similar Products</h2>
      <div className="similar-products-grid">
        {similarProducts.map((p) => (
          <div key={p.id} className="product-card" onClick={() => navigate(`/product/${p.id}`)}>
            <img 
              src={p.images && p.images[0] ? p.images[0] : "https://via.placeholder.com/150"} 
              alt={p.title} 
            />
            <h3>{p.title}</h3>
            <p>₹{p.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )}
</div>
  );
};

export default ProductPage;
