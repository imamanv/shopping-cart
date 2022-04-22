function Category(props) {
  const { name, description, imageUrl, key, order } = props.category;
  const isOddOrder = order % 2 == 0 ? false : true;
  return (
    <div
      className="category"
      style={{ flexDirection: `${isOddOrder ? "row" : "row-reverse"}` }}
    >
      <img src={imageUrl} alt={`${name} image`} height={200} width={320} />
      <div className="category-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <button>Explore {key}</button>
      </div>
    </div>
  );
}

export default Category;
