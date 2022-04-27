import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/home/productsSlice";
import { getCategories } from "../../redux/features/home/homeSlice";
import CategoryList from "../CategoryList";
import Product from "../Product";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.home);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const { isCartOpen } = useSelector((state) => state.cart);
  const [currentCategory, setCurrentCategory] = useState([]);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    if (products) setFilteredProducts(products);
  }, [products]);
  useEffect(() => {
    if (selectedCategory !== null) {
      if (selectedCategory !== "") {
        let filteredData = products.filter(
          (product) => product.category === selectedCategory
        );
        setFilteredProducts(filteredData);
      } else {
        setFilteredProducts(products);
      }
    }
  }, [selectedCategory]);
  const categorySelectHandler = (e, category) => {
    if (e.target.id !== selectedCategory) {
      setSelectedCategory(e.target.id);
      setCurrentCategory(category);
    } else {
      setSelectedCategory("");
      setCurrentCategory(categories.find((category) => category.order === 1));
    }
    setCategoryDropdownOpen(false);
  };
  const categoryDropdownHandler = () => {
    setCategoryDropdownOpen(!categoryDropdownOpen);
  };
  const categoryList = (categories) => {
    return (
      <ul>
        {categories.map((category) => {
          if (category.enabled) {
            return (
              <CategoryList
                category={category}
                categorySelectHandler={categorySelectHandler}
                selectedCategory={selectedCategory}
                key={category.id}
              />
            );
          }
        })}
      </ul>
    );
  };
  return (
    <div className="products-page">
      {!isCartOpen && (
        <div className="dropdown-bar">
          <h4>{currentCategory.name}</h4>
          <div className="dropdown-menu">
            <p className="dropdown-menu-icon" onClick={categoryDropdownHandler}>
              &gt;
            </p>
            <div
              className={`dropdown ${
                categoryDropdownOpen ? "dropdown-active" : ""
              }`}
            >
              {categoryList(categories)}
            </div>
          </div>
        </div>
      )}
      <div className="side-bar">{categoryList(categories)}</div>
      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
