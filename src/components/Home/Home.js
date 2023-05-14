import { useState, useEffect } from "react";
import "./Home.css";
import {Helmet} from 'react-helmet';
import React from 'react';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/img/002.png",
    "/img/003.png",
    "/img/main3.png",
    "/img/005.png",
  ];

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNextImage();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex]);

  return (
    <div>
      <Helmet>
        <title>오늘수학 | 소수정예 목동수학</title>
      </Helmet>
      <div className="image-gallery">
        <img src={images[currentImageIndex]} alt="main" />
        <button onClick={goToPrevImage} className="image-gallery-button-left"></button>
        <button onClick={goToNextImage} className="image-gallery-button-right"></button>
      </div>
      <div>
        <img id='submainimg' src = "/img/subm.jpeg" alt='submain'></img>
      </div>
      {/* <div className="teacher">
        <div id="teacher">
          <br></br>
          강사소개
        </div>
        <br></br>
        <div className="teacher-img">
          <img src="/img/teacher.png" alt="teacher profile"></img>
        </div>
      </div> */}
    </div>
  );
}

export default Home;
