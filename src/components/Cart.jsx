function Cart() {
  return (
    <div className="container">
      <div className="cart">
        <div className="cart-title">
          <p>My Cart (0 item)</p>
          <p className="cart-close-icon">&times;</p>
        </div>
        <div className="cart-items">
          <div className="cart-item">
            <img
              src="static\images\products\fruit-n-veg\apple.jpg"
              alt=""
              height="120px"
            />
            <div className="cart-item-info">
              <h4>Apple - Washington, Regular, 4 pcs</h4>
              <p>Price</p>
            </div>
          </div>
          <div className="cart-item">
            <img
              src="static\images\products\fruit-n-veg\apple.jpg"
              alt=""
              height="120px"
            />
            <div className="cart-item-info">
              <h4>Apple - Washington, Regular, 4 pcs</h4>
              <p>Price</p>
            </div>
          </div>
          <div className="cart-item">
            <img
              src="static\images\products\fruit-n-veg\apple.jpg"
              alt=""
              height="120px"
            />
            <div className="cart-item-info">
              <h4>Apple - Washington, Regular, 4 pcs</h4>
              <p>Price</p>
            </div>
          </div>
          <div className="cart-banner">
            <img src="static\images\lowest-price.png" alt="" />
            <p>You won't find it cheaper anywhere</p>
          </div>
        </div>
        <div className="cart-footer">
          <p>Promo can be applied on payment page</p>
          <div className="proceed-section">
            <p>Proceed to Checkout</p>
            <p>Rs.187 &gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
