import React, { Component } from 'react';
import Loader from './Loader/Loader';
// import Searchbar from './Searchbar/Searchbar';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import ImageGallery from './ImageGallery/ImageGallery';

import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  onSubmit = () => {};

  render() {
    return (
      <div>
        <Loader />
        {/* <Searchbar onSubmit={onSubmit} /> */}
        <ImageGalleryItem />
        <ImageGallery />
        <Button />
        <Modal />
      </div>
    );
  }
}

export default App;
