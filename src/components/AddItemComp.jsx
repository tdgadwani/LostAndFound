import React, { useRef, useState, useEffect} from 'react';
import Header from "./Header";
import Footer from './Footer';
import { postFoundItem } from '../services/operations/foundItemsAPI';
import { useNavigate } from 'react-router-dom';
import { postLostItem } from '../services/operations/lostItemsAPI';
import { CONSTANTS, MAX_COUNT } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { IoImageOutline } from 'react-icons/io5';
import Carousel from './Carousel.jsx';


const AddItemComp = ({ isLost }) => {
  const itemName = useRef(null);
  const locationFound = useRef(null);
  const category = useRef(null);
  const description = useRef(null);


  const PhoneNumber=useRef(null)
  const Emailref=useRef(null)
  // const [image,setImage] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [fileReaders, setFileReaders] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [previewUrls, setPreviewUrls] = useState([]);

  const handleChange = (e) => {
    // setImage(URL.createObjectURL(e.target.files[0]))
    handleFiles(e);
    setPreviewUrls((prev) =>
      prev.concat(
        Array.from(e.target.files ?? []).map((f) =>
          window.URL.createObjectURL(f)
        )
      )
    );
    console.log(previewUrls)
  };

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => window.URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const handleUploadFiles = (files) => {
    // console.log(files,"yash tuhsar loda")
    const uploaded = [...uploadedFiles];
    const readers = [];
    let limitExceeded = false;

    files.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          readers.push(reader.result);
          if (readers.length === files.length) {
            setFileReaders((prev) => [...prev, ...readers]);
          }
        };
        reader.readAsDataURL(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFiles = (e) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Emailref.current.value && !PhoneNumber.current.value) {
      alert("Please provide either an email or a phone number.");
      return;
    }
    const formData = new FormData();
    uploadedFiles.forEach((file) => {
      formData.append("media", file);
    });

    formData.append("itemName", itemName.current.value);
    formData.append("description", description.current.value);
    formData.append("address[buildingName]", locationFound.current.value);
    formData.append("category", category.current.value);

    if (Emailref.current.value) {
      formData.append("contactInfo[email]", Emailref.current.value);
    }
    if (PhoneNumber.current.value) {
      formData.append("contactInfo[mobileNumber]", PhoneNumber.current.value);
    }

    itemName.current.value = '';
    description.current.value = '';
    locationFound.current.value = '';
    category.current.value = '';

    
    if (isLost) {
      dispatch(postLostItem(formData, navigate));
    } else {
      dispatch(postFoundItem(formData, navigate));
    }  
  };

  return (
    <>
      {/* <div className="min-h-screen bg-gradient-to-b from-white to-red-200 p-2 md:p-4 mt-10"> */}
      <div className="min-h-screen bg-black p-2 md:p-4 ">
        <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-lg p-4 md:p-6 mt-20">
          <h1 className="text-6xl md:text-3xl font-bold text-center mb-4 md:mb-6">
            Add Item
          </h1>
          <div className="flex justify-center mb-2 md:mb-4 ">
            <div className="flex items-center space-x-2 md:space-x-3">
              <button
                onClick={() => setIsLost(true)}
                className={`px-2 md:px-3 py-1 md:py-2 rounded ${isLost ? "bg-red-500 text-white" : "bg-gray-300"
                  }`}
              >
                Lost
              </button>
              <button
                onClick={() => setIsLost(false)}
                className={`px-2 md:px-3 py-1 md:py-2 rounded ${!isLost ? "bg-green-500 text-white" : "bg-gray-300"
                  }`}
              >
                Found
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            <div className="flex flex-col md:flex-row justify-between space-y-3 md:space-y-0 md:space-x-3">
              <div className="w-full md:w-1/2 flex flex-col items-center space-y-3 bg-gray-400 p-3 rounded-lg">
                <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                  {previewUrls.length > 0 ? (
                    <Carousel autoSlide={true}>
                      {previewUrls.map((url) => (
                        <img key={url} src={url} alt="" />
                      ))}
                    </Carousel>
                  ) : (
                    <div className="text-gray-500">
                      <IoImageOutline />
                    </div>
                  )}
                </div>
                {/* <input
                  type="file"
                  multiple
                  onChange={handleFiles}
                  disabled={fileLimit}
                  className="hidden"
                  id="upload-image"
                /> */}
                <input
                  type="file"
                  // id="inputFotos"
                  multiple
                  disabled={fileLimit}
                  onChange={handleChange}
                  className="hidden"
                  id="upload-image"
                  accept=".png, .jpg, .raw .jpeg"
                />
                <label
                  htmlFor="upload-image"
                  className="bg-gray-100 py-2 px-3 rounded cursor-pointer hover:bg-blue-gray-300 text-center w-full"
                >
                  Add Image
                </label>
              </div>
              <div className="w-full md:w-1/2 bg-gray-400 p-3 rounded-lg">
                <h2 className="text-lg md:text-xl font-bold mb-3">
                  Description
                </h2>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Item Name"
                    ref={itemName}
                    className="w-full p-2 rounded border border-gray-300"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    ref={PhoneNumber}
                    className="w-full p-2 rounded border border-gray-300"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    ref={Emailref}
                    className="w-full p-2 rounded border border-gray-300"
                  />
                  <div className="flex text-sm flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                    <input
                      type="text"
                      placeholder="Location Found"
                      ref={locationFound}
                      className="w-full md:w-1/2 p-2 rounded border border-gray-300"
                    />
                    <select
                      ref={category}
                      className="w-full md:w-1/2 p-2 rounded border border-gray-300"
                    >
                      <option value="" disabled>Select Category</option>
                      {CONSTANTS.map((constant, index) => (
                        <option value={constant} key={index}>
                          {constant}
                        </option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    placeholder="Add Details"
                    ref={description}
                    className="w-full p-2 rounded border border-gray-300"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <button
                type="submit"
                className="bg-red-500 text-white py-2 px-6 rounded-full font-bold hover:bg-red-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddItemComp;