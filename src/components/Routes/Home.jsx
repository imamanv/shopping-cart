import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBanners, getCategories } from "../../redux/features/home/homeSlice";
import Carousel from "../Carousel";
import Category from "../Category";
function Home() {
  const dispatch = useDispatch();
  const { categories, banners } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getBanners());
  }, []);
  return (
    <main>
      <Carousel banners={banners} />
      {categories.map((category) => {
        if (category.enabled)
          return <Category key={category.id} category={category} />;
      })}
    </main>
  );
}

export default Home;
