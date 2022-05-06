import { useEffect, useRef, useState } from "react";

function Carousel(props) {
  const { banners } = props;
  let counter = 0;
  const imgs = document.querySelectorAll(".banner-images");
  const bannerList = document.querySelector(".banner-list");
  const bannerImgslength = imgs.length;
  const bannerNextHandler = () => {
    counter++;
    if (counter === bannerImgslength) {
      counter = 0;
    }
    bannerList.style.transform = `translateX(-${counter * 100}%)`;
    if (counter === 0) {
      bannerList.style.transition = "none";
      return;
    }
    bannerList.style.transition = `transform 0.4s ease-in-out`;
  };
  const bannerPrevHandler = () => {
    counter--;
    if (counter < 0) {
      counter = bannerImgslength - 1;
    }
    bannerList.style.transform = `translateX(-${counter * 100}%)`;
    if (counter === bannerImgslength - 1) {
      bannerList.style.transition = "none";
      return;
    }
    bannerList.style.transition = `transform 0.4s ease-in-out`;
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
        Prev
      </button>
      <button className="banner-btn btn-next" onClick={bannerNextHandler}>
        Next
      </button>
    </div>
  );
}

export default Carousel;
