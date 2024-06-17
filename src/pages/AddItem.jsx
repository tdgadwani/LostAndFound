import React, { useState } from 'react';
import Header from "../components/Header"
import Footer from '../components/Footer';
// import ImageIcon from "../assets/ImageIcon.svg"

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const [locationFound, setLocationFound] = useState('');
  const [category, setCategory] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState(null);
  const [isLost, setIsLost] = useState(true); // toggle

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log({ itemName, locationFound, category, details, image, isLost });
  };

  return (
    <>
        <Header />
       
        <div className="min-h-screen bg-gradient-to-b from-white to-red-200 p-2 md:p-4 mt-10">
            <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-lg p-4 md:p-6">
                <h1 className="text-6xl md:text-3xl font-bold text-center mb-4 md:mb-6">Add Item</h1>

                
        <div className="flex justify-center mb-2 md:mb-4 ">
          <div className="flex items-center space-x-2 md:space-x-3">
            <button
              onClick={() => setIsLost(true)}
              className={`px-2 md:px-3 py-1 md:py-2 rounded ${isLost ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
            >
              Lost
            </button>
            <button
              onClick={() => setIsLost(false)}
              className={`px-2 md:px-3 py-1 md:py-2 rounded ${!isLost ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
            >
              Found
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <div className="flex flex-col md:flex-row justify-between space-y-3 md:space-y-0 md:space-x-3">
            <div className="w-full md:w-1/2 flex flex-col items-center space-y-3 bg-gray-300 p-3 rounded-lg">
              <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                {image ? (
                  <img src={image} alt="Item" className="object-cover w-full h-full" />
                ) : (
                  <div className="text-gray-500">
                    {/* <img src={ImageIcon} alt="img" /> */}
                    No Image Selected
                  </div>
                )}
              </div>
              <input type="file" onChange={handleImageChange} className="hidden" id="upload-image" />
              <label htmlFor="upload-image" className="bg-gray-100 py-2 px-3 rounded cursor-pointer hover:bg-gray-400 text-center w-full">
                Add Image
              </label>
            </div>
            <div className="w-full md:w-1/2 bg-gray-300 p-3 rounded-lg">
              <h2 className="text-lg md:text-xl font-bold mb-3">Description</h2>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Item Name"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full p-2 rounded border border-gray-300"
                />
                <div className="flex text-sm flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                  <input
                    type="text"
                    placeholder="Location Found"
                    value={locationFound}
                    onChange={(e) => setLocationFound(e.target.value)}
                    className="w-full md:w-1/2 p-2 rounded border border-gray-300"
                  />
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full md:w-1/2 p-2 rounded border border-gray-300"
                  >
                    <option value="" disabled>Select Category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="accessories">Accessories</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <textarea
                  placeholder="Add Details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full p-2 rounded border border-gray-300"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <button type="submit" className="bg-red-500 text-white py-2 px-6 rounded-full font-bold hover:bg-red-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AddItem;


//Multiple images'

// import React, { useState } from 'react';
// import Slider from "react-slick";
// import Header from "../components/Header";
// import Footer from '../components/Footer';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const AddItem = () => {
//   const [itemName, setItemName] = useState('');
//   const [locationFound, setLocationFound] = useState('');
//   const [category, setCategory] = useState('');
//   const [details, setDetails] = useState('');
//   const [images, setImages] = useState([]);
//   const [isLost, setIsLost] = useState(true); // toggle

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     const imageUrls = files.map(file => URL.createObjectURL(file));
//     setImages(prevImages => [...prevImages, ...imageUrls]);
//     console.log("Image URLs:", imageUrls); // Debugging line
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log({ itemName, locationFound, category, details, images, isLost });
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: true, // Added to adapt height based on image
//   };

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-gradient-to-b from-white to-red-200 p-2 md:p-4 mt-10">
//         <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-lg p-4 md:p-6">
//           <h1 className="text-6xl md:text-3xl font-bold text-center mb-4 md:mb-6">Add Item</h1>

//           <div className="flex justify-center mb-2 md:mb-4 ">
//             <div className="flex items-center space-x-2 md:space-x-3">
//               <button
//                 onClick={() => setIsLost(true)}
//                 className={`px-2 md:px-3 py-1 md:py-2 rounded ${isLost ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
//               >
//                 Lost
//               </button>
//               <button
//                 onClick={() => setIsLost(false)}
//                 className={`px-2 md:px-3 py-1 md:py-2 rounded ${!isLost ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
//               >
//                 Found
//               </button>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
//             <div className="flex flex-col md:flex-row justify-between space-y-3 md:space-y-0 md:space-x-3">
//               <div className="w-full md:w-1/2 flex flex-col items-center space-y-3 bg-gray-300 p-3 rounded-lg">
//                 <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
//                   {images.length > 0 ? (
//                     <Slider {...settings}>
//                       {images.map((image, index) => (
//                         <div key={index} className="h-40 w-full">
//                           <img src={image} alt={`Item ${index}`} className="object-cover w-full h-full" />
//                         </div>
//                       ))}
//                     </Slider>
//                   ) : (
//                     <div className="text-gray-500">No Image Selected</div>
//                   )}
//                 </div>
//                 <input type="file" onChange={handleImageChange} className="hidden" id="upload-images" multiple />
//                 <label htmlFor="upload-images" className="bg-gray-100 py-2 px-3 rounded cursor-pointer hover:bg-gray-400 text-center w-full">
//                   Add Images
//                 </label>
//               </div>
//               <div className="w-full md:w-1/2 bg-gray-300 p-3 rounded-lg">
//                 <h2 className="text-lg md:text-xl font-bold mb-3">Description</h2>
//                 <div className="space-y-3">
//                   <input
//                     type="text"
//                     placeholder="Item Name"
//                     value={itemName}
//                     onChange={(e) => setItemName(e.target.value)}
//                     className="w-full p-2 rounded border border-gray-300"
//                   />
//                   <div className="flex text-sm flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
//                     <input
//                       type="text"
//                       placeholder="Location Found"
//                       value={locationFound}
//                       onChange={(e) => setLocationFound(e.target.value)}
//                       className="w-full md:w-1/2 p-2 rounded border border-gray-300"
//                     />
//                     <select
//                       value={category}
//                       onChange={(e) => setCategory(e.target.value)}
//                       className="w-full md:w-1/2 p-2 rounded border border-gray-300"
//                     >
//                       <option value="" disabled>Select Category</option>
//                       <option value="electronics">Electronics</option>
//                       <option value="clothing">Clothing</option>
//                       <option value="accessories">Accessories</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>
//                   <textarea
//                     placeholder="Add Details"
//                     value={details}
//                     onChange={(e) => setDetails(e.target.value)}
//                     className="w-full p-2 rounded border border-gray-300"
//                     rows="3"
//                   ></textarea>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center mt-3">
//               <button type="submit" className="bg-red-500 text-white py-2 px-6 rounded-full font-bold hover:bg-red-600">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <Footer />
      
//     </>
//   );
// };

// export default AddItem;
