import React, { useRef, useState } from 'react';
import Avatar from "../assets/add_dp_icon.svg";
import { CONSTANTS, MAX_COUNT } from '../utils/constants.js';
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const PostItem = () => {
    const [uploadedFiles,setUploadedFiles] = useState([]);
    const [fileLimit,setFieLimit] = useState(false);
    // console.log(uploadedFiles);
    const handleUploadFiles = (files) => {
        const uploaded = [...uploadedFiles];
        let limitExceeded = false;
        files.some((file) => {
            if(uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                if(uploaded.length === MAX_COUNT)
                    setFieLimit(true);
                if(uploaded.length > MAX_COUNT){
                    toast.error(`You can only add upto ${MAX_COUNT} files`);
                    setFieLimit(false);
                    limitExceeded = true;
                    return true;
                }
            }
        })
        if(!limitExceeded)
            setUploadedFiles(uploaded);  
    };
    const handleFiles = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files);
        handleUploadFiles(chosenFiles);
    }
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const placeRef = useRef(null);
    const categoryRef = useRef(null);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            location: placeRef.current.value,
            category: categoryRef.current.value,
            media: uploadedFiles,
        };
        titleRef.current.value = '';
        descriptionRef.current.value = '';
        placeRef.current.value = '';
        categoryRef.current.value = '',
        dispatch();

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Item:</label>
          <input type="text" id="title" ref={titleRef} />
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <input type="textarea" id="description" ref={descriptionRef} />
        </div>

        <div>
          <label htmlFor="place">Place:</label>
          <input type="text" id="place" ref={placeRef} />
        </div>

        <div>
          <label htmlFor="category">Category:</label>
          <select ref={categoryRef}>
            {CONSTANTS.map((constant, index) => {
              return (
                <option value={constant} key={index}>
                  {constant}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label htmlFor="images">Images:</label>
          <img className="h-16 w-16 fixed pb-7 " src={Avatar} alt="Avatar" />

          <input
            multiple
            type="file"
            id="images"
            // className="opacity-0"
            onChange={handleFiles}
            disabled={fileLimit}
            accept="image/jpgf, image/jpeg, image/png"
          />
        </div>
        <br/><br/>
        <div>
            <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default PostItem