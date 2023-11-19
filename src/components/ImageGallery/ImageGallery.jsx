import { Component } from "react"
import { getGallery } from "../../api/gallery.js";
//Список карточек изображений. Создает DOM-элемент следующей структуры.
//сюда должен прийти массив
class ImageGallery extends Component {
  state = {
    isLoader: false,
    error: '',
    gallery: ''
  }
componentDidMount() {
this.handleGallery()
}
handleGallery = async()=>{
  const data = await getGallery()
  console.log(data);
}
  render() {
    return(
        <ul className="gallery">
    <ImageGallery />
  {/* Набор <li> с изображениями */}
</ul>
    );
  }
};

export default ImageGallery