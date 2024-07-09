import React, { useState, useEffect } from "react";
// import url from "../assets/lostSample_1.png"
import Carousel from "./Carousel.jsx";

function Test() {
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleChange = (e) => {
    setPreviewUrls((prev) =>
      prev.concat(
        Array.from(e.target.files ?? []).map((f) =>
          window.URL.createObjectURL(f)
        )
      )
    );
  };

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => window.URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  return (
    <div>
      <input
        type="file"
        id="inputFotos"
        multiple
        onChange={handleChange}
        accept=".png, .jpg, .raw"
      />
      <div className="w-52" >
        <Carousel>
        {previewUrls.map((url) => (
          <img key={url} src={url} alt="" />
        ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Test;
