import React, { Component } from 'react';

import getGallery from '../api/gallery.js';
// import Loader from './Loader/Loader';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import ImageGallery from './ImageGallery/ImageGallery';
//import axios from 'axios';
// import Button from './Button/Button';
// import Modal from './Modal/Modal';

// class App extends Component {
//   onSubmit = () => {};

//   render() {
//     return (
//       <div>
//         <Loader />
//         {/* <Searchbar onSubmit={onSubmit} /> */}
//         <ImageGalleryItem />
//         <ImageGallery />
//         <Button />
//         <Modal />
//       </div>
//     );
//   }
// }

// export default App;

class App extends Component {
  async componentDidMount() {
   const data = await getGallery()
   console.log(data);
 }


   render() {
     return (
       <div>
       work
       </div>
     );
   }
 }

 export default App;