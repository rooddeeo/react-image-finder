//Компонент спинера, отображется пока идет загрузка изобаржений. Используй любой готовый компонент,
//например react-loader-spinner или любой другой.
import { Circles } from 'react-loader-spinner';
const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#2271b3"
      ariaLabel="circles-loading"
      wrapperStyle
      wrapperClass="loader"
      visible={true}
    />
  );
};

export default Loader;
