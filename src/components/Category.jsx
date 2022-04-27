import Data from "../dataProperties.json";
function Category(props) {
  const { name, description, imageUrl, key, order } = props.category;
  const isOddOrder = order % 2 == 0 ? false : true;
  return (
    <article
      className="category"
      style={{ flexDirection: `${isOddOrder ? "row" : "row-reverse"}` }}
    >
      <img src={imageUrl} alt={`image of ${name}`} />
      <section className="category-details">
        <h4>{name}</h4>
        <p>{description}</p>
        <button className="explore-btn">
          {Data.Explore} {key}
        </button>
      </section>
    </article>
  );
}

export default Category;
