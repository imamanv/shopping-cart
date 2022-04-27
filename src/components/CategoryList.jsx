function CategoryList(props) {
  const { selectedCategory, categorySelectHandler, category } = props;
  return (
    <li
      key={category.id}
      id={category.id}
      onClick={(e) => {
        categorySelectHandler(e, category);
      }}
      className={`category-list ${
        selectedCategory === category.id ? "active-category" : ""
      }`}
    >
      {category.name}
    </li>
  );
}

export default CategoryList;
