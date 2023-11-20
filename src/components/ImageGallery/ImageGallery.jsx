//Компонент элемента списка с изображением. Создает DOM-элемент следующей структуры.
const ImageGallery = ({ card }) => {
  return (
    <ul className="gallery">
  {card}
</ul>
  );
};

export default ImageGallery;