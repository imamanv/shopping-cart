function Category(props) {
  const { name, description, imageUrl, key, order } = props.category;
  const isOddOrder = order % 2 == 0 ? false : true;
  return (
    <div
      className="category"
      style={{ flexDirection: `${isOddOrder ? "row" : "row-reverse"}` }}
    >
      <img src={imageUrl} alt={`image of ${name}`} />
      <div className="category-details">
        <h4>{name}</h4>
        <p>{description}</p>
        <button className="explore-btn">Explore {key}</button>
      </div>
    </div>
  );
}

export default Category;
