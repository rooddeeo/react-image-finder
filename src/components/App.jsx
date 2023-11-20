import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
//import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem.jsx';
import getGallery from '../api/gallery.js';
import Button from './Button/Button';
import Loader from './Loader/Loader.jsx';
import ErrorBackEnd from './ErrorBackEnd/ErrorBackEnd.jsx';
import { GalleryItem } from './ImageGalleryItem/ImageGalleryItem.jsx';
//import Modal from './Modal/Modal';

class App extends Component {
  state = {
    isLoader: false,
    errorBackEnd: '',
    gallery: '',
   search: '',
  };
  onSubmit = ({ search }) => {
    console.log(search);
    this.setState({ search });
  };
  componentDidUpdate(_, prevState) {
    if (prevState.search !== this.state.search) {
      this.handleGallery();
    }
  }
  handleGallery = async () => {
    try {
      this.setState({ isLoader: true });
      const data = await getGallery(this.state.search);
      this.setState({ gallery: data.hits, error: '' });
      console.log(this.state.gallery);
      console.log(data.hits);
    } catch (error) {
      this.setState({ errorBackEnd: error.message });
    } finally {
      this.setState({ isLoader: false });
    }
  };
  render() {
    return (
      <div>
        {this.isLoader && <Loader />}
        {this.errorBackEnd && <ErrorBackEnd errorBackEnd={this.errorBackEnd} />}
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.gallery && <GalleryItem gallery={this.state.gallery} />}
        <Button />
        {/* <Modal /> */}
      </div>
    );
  }
}
export default App;
