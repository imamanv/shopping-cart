import { useEffect, useState } from "react";
import Data from "../dataProperties.json";
function Carousel(props) {
  const { banners } = props;
  const [currentSlide, setCurrentSlide] = useState(1);
  const [btnClicked, setBtnClicked] = useState(false);
  const bannerImages = document.querySelectorAll(".banner-images");
  const bannerList = document.querySelector(".banner-list");
  useEffect(() => {
    let interval = setInterval(() => {
      setBtnClicked(true);
      setCurrentSlide((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (btnClicked) {
      bannerList.style.transition = "none";
      if (currentSlide > bannerImages.length) {
        bannerList.style.transform = `translateX(0%)`;
        setCurrentSlide(1);
      } else if (currentSlide === 0) {
        bannerList.style.transform = `translateX(-${
          (bannerImages.length - 1) * 100
        }%`;
        setCurrentSlide(bannerImages.length);
      } else {
        bannerList.style.transform = `translateX(-${
          (currentSlide - 1) * 100
        }%)`;
        bannerList.style.transition = `transform 0.4s ease-in-out`;
      }
    }
  }, [currentSlide, btnClicked]);
  const bannerNextHandler = () => {
    setBtnClicked(true);
    setCurrentSlide(currentSlide + 1);
  };
  const bannerPrevHandler = () => {
    setBtnClicked(true);
    setCurrentSlide(currentSlide - 1);
  };
  const dotClickHandler = (e) => {
    setBtnClicked(true);
    setCurrentSlide(+e.target.id.at(-1));
  };
  return (
    <div className="banner-container">
      <div className="banner-list">
        {banners.map((banner) => (
          <img
            key={banner.id}
            src={banner.bannerImageUrl}
            alt={banner.bannerImageAlt}
            className="banner-images"
          />
        ))}
      </div>
      <button className="banner-btn btn-prev" onClick={bannerPrevHandler}>
        {Data.PREV}
      </button>
      <button className="banner-btn btn-next" onClick={bannerNextHandler}>
        {Data.NEXT}
      </button>
      <div className="banner-navigation">
        {banners.map((_, id) => (
          <button
            aria-label={`slide-${id + 1}`}
            key={_.id}
            id={`banner-dot-${id + 1}`}
            className={`banner-dot ${
              currentSlide === id + 1 ? "active-slide" : ""
            }`}
            onClick={dotClickHandler}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
