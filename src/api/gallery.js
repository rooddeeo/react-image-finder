// import axios from 'axios';
// axios.defaults.url =
//   'https://pixabay.com/api/?q=cat&page=1&key=12002814-5debf547df742213b695907de&image_type=photo&orientation=horizontal&per_page=12';
// export const getGallery = async () => {
//   const { data } = await axios();
//   return data;
// };

import axios from 'axios';
axios.defaults.url = 'https://pixabay.com/api/';
const getGallery = async () => {
  const { data } = await axios.get(
    `?q=cat&page=1&key=12002814-5debf547df742213b695907de&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};

export default getGallery
