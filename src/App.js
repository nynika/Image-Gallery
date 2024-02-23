/* import "./styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App() {

   const images = [
      {
        original: "/images/img1.jpg",
        thumbnail: "/images/img1.jpg"
      },
      {
        original: "/images/img4.jpg",
        thumbnail: "/images/img4.jpg"
      },
      {
        original: "/images/img3.jpg",
        thumbnail:"/images/img3.jpg"
      },

      {
        original: "/images/img5.jpg",
        thumbnail: "/images/img5.jpg"
      },
      {
        original: "/images/img6.jpg",
        thumbnail: "/images/img6.jpg"
      }
    ]; 
      

  return (
    <div className="App">
      <h2>Image Gallery</h2>
      <ImageGallery
        items={images}
        showPlayButton={true}
        showFullscreenButton={true}
        slideInterval={1000}
        slideOnThumbnailOver={true}
        showIndex={true}
        onPlay={() => {
          alert("slideshow is now playing!");
        }}
      />
    </div>
  );
}
 */
/* 

import React, { useState } from "react";
import "./styles.css";
import "react-image-gallery/styles/css/image-gallery.css";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      original: "/images/img1.jpg",
      thumbnail: "/images/img1.jpg"
    },
    {
      original: "/images/img4.jpg",
      thumbnail: "/images/img4.jpg"
    },
    {
      original: "/images/img3.jpg",
      thumbnail: "/images/img3.jpg"
    },
    {
      original: "/images/img5.jpg",
      thumbnail: "/images/img5.jpg"
    },
    {
      original: "/images/img6.jpg",
      thumbnail: "/images/img6.jpg"
    }
  ];

  const handleClickImage = (index) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const expandImage = (event) => {
  };

  return (
    <div className="App">
      <h2>Image Gallery</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-container" id={`imageContainer-${index}`} key={index}>
            <img
              src={image.thumbnail}
              alt={`Image ${index + 1}`}
              className="small-image"
              onClick={(event) => {
                handleClickImage(index);
                expandImage(event);
              }}
            />
          </div>
        ))}
      </div>
      {selectedImage !== null && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <img
              src={images[selectedImage].original}
              alt="Full size"
              className="fullscreen-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}
 */

import React, { useState } from "react";
import "./styles.css";
import "react-image-gallery/styles/css/image-gallery.css";


export default function App() {
const [selectedImage, setSelectedImage] = useState(null);

const importAll = (r) => {
  let images = [];
  r.keys().forEach((key) => {
    images.push({
      original: r(key),
      thumbnail: r(key)
    });
  });
  return images;
};

const images = importAll(require.context("./images", false, /\.(jpg|jpeg|png|svg)$/));

const handleClickImage = (index) => {
  setSelectedImage(index);
};

const handleCloseModal = () => {
  setSelectedImage(null);
};

return (
  <div className="App">
    <h2>Image Gallery</h2>
    <div className="image-grid">
      {images.map((image, index) => (
        <div className="image-container" id={`imageContainer-${index}`} key={index}>
          <img
            src={image.thumbnail}
            alt={`Image ${index + 1}`}
            className="small-image"
            onClick={() => handleClickImage(index)}
          />
        </div>
      ))}
    </div>
    {selectedImage !== null && (
      <div className="modal-overlay" onClick={handleCloseModal}>
        <div className="modal-content">
          <img
            src={images[selectedImage].original}
            alt="Full size"
            className="fullscreen-image"
          />
        </div>
      </div>
    )}
  </div>
);
}
