//Компонент элемента списка с изображением. Создает DOM-элемент следующей структуры.
const ImageGallery = ({card}) => {

  <li className="gallery-item">
  <img src={card.webformatURL} alt={card.tags} />
</li>

};

export default ImageGallery