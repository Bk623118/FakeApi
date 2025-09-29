import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux"
import {add} from '../productSlice';
import {addTowishList} from '../wishlistSlice';

const ProductPage = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found!</p>;

  return (
    <div className="product-page">
      <button onClick={() => navigate(-1)} className="btn-back">⬅ Back</button>

      <div className="product-details">
        <div className="product-image">
          <img 
            src={product.images && product.images[0] ? product.images[0] : "https://via.placeholder.com/300"} 
            alt={product.title} 
          />
        </div>

        <div className="product-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>₹{product.price.toFixed(2)}</h3>
          <button className="btn-buy">Buy Now</button>
          <button className="btn-cart" onClick={()=>dispatch(add(product))}>Add to Cart</button>
          <button className="btn-wishlist" onClick={()=>dispatch(addTowishList(product))} >Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;