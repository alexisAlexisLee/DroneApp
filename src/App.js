import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentImage, setCurrentImage] = useState('/origin.PNG');
  const [isImageSelected, setImageSelected] = useState(false);
  const images = ['/origin.PNG', '/loc1.PNG', '/loc2.PNG', '/loc3.PNG'];

  const switchImage = (image) => {
    setCurrentImage(image);
    setImageSelected(true);
  };

  const resetImage = () => {
    setCurrentImage('/origin.PNG');
    setImageSelected(false);
  };

  return (
    <div className="App">
      <div className="top-rectangle"></div>
      <div className="centered-text">Pick Your Drone's Destination</div>
      
      <div className="image-container">
        <img src={currentImage} alt="Burger Bowl Gatech" className="main-photo" />
      </div>

      <div className="button-container">
        <button onClick={() => switchImage('/loc1.PNG')} disabled={isImageSelected}>Loc 1</button>
        <button onClick={() => switchImage('/loc2.PNG')} disabled={isImageSelected}>Loc 2</button>
        <button onClick={() => switchImage('/loc3.PNG')} disabled={isImageSelected}>Loc 3</button>
      </div>

      <button onClick={resetImage} className="back-button">Back</button>
    </div>
  );
}

export default App;
