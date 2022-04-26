function CategoryList(props) {
  const { selectedCategory, categorySelectHandler, category } = props;
  return (
    <li
      key={category.id}
      id={category.id}
      onClick={categorySelectHandler}
      className={`${selectedCategory === category.id ? "active-category" : ""}`}
    >
      {category.name}
    </li>
  );
}

export default CategoryList;
