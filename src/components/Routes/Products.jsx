import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/home/productsSlice";
import CategoryList from "../CategoryList";
import Product from "../Product";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.home);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  useEffect(() => {
    dispatch(getProducts());
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
  const categorySelectHandler = (e) => {
    if (e.target.id !== selectedCategory) setSelectedCategory(e.target.id);
    else setSelectedCategory("");
    setCategoryDropdownOpen(!categoryDropdownOpen);
  };
  const categoryDropdownHandler = () => {
    setCategoryDropdownOpen(!categoryDropdownOpen);
  };
  return (
    <div className="products-page">
      <div className="dropdown-bar">
        <h4>Fruits and Vegetables</h4>
        <div className="dropdown-menu">
          <p className="dropdown-menu-icon" onClick={categoryDropdownHandler}>
            &gt;
          </p>
          <div
            className={`dropdown ${
              categoryDropdownOpen ? "dropdown-active" : ""
            }`}
          >
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
          </div>
        </div>
      </div>
      <div className="side-bar">
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
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
