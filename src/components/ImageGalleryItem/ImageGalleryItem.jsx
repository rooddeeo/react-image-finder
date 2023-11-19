import { Component } from 'react';
import getGallery from '../../api/gallery.js';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
//Список карточек изображений. Создает DOM-элемент следующей структуры.
//сюда должен прийти массив
class ImageGalleryItem extends Component {
  state = {
    isLoader: false,
    error: '',
    gallery: '',
  };
  componentDidMount() {
    this.handleGallery();
  }

  handleGallery = async () => {
    const data = await getGallery();
    this.setState({gallery: data.hits})
  };
  render() {
    console.log(this.state);
    const {gallery} = this.state;
    return gallery&&gallery.map((card) => (<ImageGallery card={card} key={card.id}/>))    
  }
}

export default ImageGalleryItem;
