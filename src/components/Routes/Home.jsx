import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/features/home/homeSlice";
import Category from "../Category";
function Home() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div>
      {categories.map((category) => {
        if (category.enabled)
          return <Category key={category.id} category={category} />;
      })}
    </div>
  );
}

export default Home;
