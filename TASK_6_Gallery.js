import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './Gallery.css';

const animalImages = [
  'https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-802436_960_720.jpg', // Dog 1
  'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg', // Dog 2
  'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg', // Dog 3
  'https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559_960_720.jpg', // Dog 4
  'https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074_960_720.jpg', // Dog 5
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {animalImages.map((image, index) => (
        <ImageItem key={index} src={image} onClick={() => openModal(image)} />
      ))}
      {selectedImage && <Modal src={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default Gallery;
