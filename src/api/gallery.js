import axios from 'axios';
axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=12002814-5debf547df742213b695907de&image_type=photo&orientation=horizontal&per_page=12';
const getGallery = async () => {
  const { data } = await axios();
  return data;
};

export default getGallery