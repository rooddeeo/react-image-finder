import { Component } from 'react';
import getGallery from '../../api/gallery.js';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import Loader from '../Loader/Loader.jsx';
import ErrorBackEnd from '../ErrorBackEnd/ErrorBackEnd.jsx';

//Список карточек изображений. Создает DOM-элемент следующей структуры.
//сюда должен прийти массив
export class ImageGalleryItem extends Component {
  state = {
    isLoader: false,
    errorBackEnd: '',
    gallery: '',
  };
  componentDidMount() {
    this.handleGallery();
  }

  handleGallery = async () => {
    try {
      this.setState({ isLoader: true });
      const data = await getGallery();
      this.setState({ gallery: data.hits });
    } catch (error) {
      console.log(error);
      this.setState({ errorBackEnd: error.message });
    } finally {
      this.setState({ isLoader: false });
    }
  };
  render() {
    console.log(this.state);
    const { gallery, isLoader, errorBackEnd } = this.state;
    return (
      <>
        {isLoader && <Loader />}
        {errorBackEnd && <ErrorBackEnd errorBackEnd={errorBackEnd} />}
        {gallery &&
          gallery.map(card => <ImageGallery card={card} key={card.id} />)}
      </>
    );
  }
}

//export default ImageGalleryItem;

export const GalleryItem = ({gallery}) => {
return gallery.map(card => (
<ImageGallery card={<li className="gallery-item">
  <img src={card.webformatURL} alt={card.tags} />
</li>} key={card.id} />))
}

//export default GalleryItem
