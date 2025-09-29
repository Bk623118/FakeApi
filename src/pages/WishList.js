import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist, clearWishList } from "../wishlistSlice";

const Wishlist = () => {
const wishlistItems = useSelector((state) => state.wishlist?.items) || [];
  const dispatch = useDispatch();;

  if (wishlistItems.length === 0) {
    return <h2>Your Wishlist is Empty 💔</h2>;
  }

  return (
    <div className="wishlist-container">
  <h2>My Wishlist ❤️</h2>
  <button className="clear-btn" onClick={() => dispatch(clearWishList())}>
    Clear Wishlist
  </button>

  {wishlistItems.map(item => (
    <div key={item.id} className="wishlist-item">
      <div>
        <h4>{item.title}</h4>
        <p>₹{item.price}</p>
      </div>
      <button className="remove-btn" onClick={() => dispatch(removeFromWishlist(item.id))}>
        Remove
      </button>
    </div>
  ))}
</div>
  );
};

export default Wishlist;