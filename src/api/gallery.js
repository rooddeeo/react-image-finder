import axios from 'axios';
axios.defaults.baseURL =
  'https://pixabay.com/api';

const getGallery = async (search) => {
  console.log(search);
  const { data } = await axios(`/?q=${search}&page=1&key=12002814-5debf547df742213b695907de&image_type=photo&orientation=horizontal&per_page=12`);
  console.log(data);
  return data;
};

export default getGallery