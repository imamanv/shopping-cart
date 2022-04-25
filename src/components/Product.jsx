function Product(props) {
  const { product } = props;
  return (
    <div className="product">
      <div className="product-name">{product.name}</div>
      <img src={product.imageURL} alt={`picture of ${product.name}`} />
      <p className="product-description">{product.description}</p>
      <div className="price-buy">
        <span>MRP RS.{product.price}</span>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default Product;
