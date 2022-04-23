function Category(props) {
  const { name, description, imageUrl, key, order } = props.category;
  const isOddOrder = order % 2 == 0 ? false : true;
  return <div></div>;
}

export default Category;
