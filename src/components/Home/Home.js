import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {Helmet} from 'react-helmet';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const images = [
    "/img/main.png",
    "/img/main2.png",
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
      if (isPlaying) {
        goToNextImage();
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex, isPlaying]);

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="image-gallery">
  <img src={images[currentImageIndex]} alt="main" />
  <button onClick={goToPrevImage} className="image-gallery-button-left"></button>
  <button onClick={goToNextImage} className="image-gallery-button-right"></button>
</div>
    <div class="teacher">
      <div id="teacher">
        <br></br>
        강사소개
        
      </div>
      <br></br>
      <div class="teacher-img">
     
        <img src="/img/teacher.png" alt="teacher profile"></img>
      </div>
    </div>



      <div className="buttons">
        {/* <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "일시정지" : "재생"}
        </button> */}
      </div>
    </div>
  );
}

export default Home;
