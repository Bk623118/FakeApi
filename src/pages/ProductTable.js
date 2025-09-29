import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); 

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading products...</p>;

  // Group products by category

  return (
    <div className="product-table-container">
  <h2>Products by Category</h2>
  <table className="product-table">
    <thead>
      <tr>
        <th>Image</th>
        <th>Category</th>
        <th>Product</th>
        <th>Price</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, index) => (
        <tr key={product.id}>
          <td><img src={product.images[0]} alt={product.title}  className="catImage" /></td>
          <td>{product.category.name}</td>
          <td>{product.title}</td>
          <td>${product.price}</td>
          
          <td>
            <Link
              to={`/product/${product.id}`}
              className="product-link"
            >
              View
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default ProductTable;

