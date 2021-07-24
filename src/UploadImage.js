import React, { useState } from 'react';
import './style.css';

export default function UploadImage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFileSelected, setIsFileSelected] = useState(false);

  const handleChange = e => {
    setSelectedFile(e.target.files[0]);
    setIsFileSelected(true);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <label htmlFor="img">UploadImage : </label>
      <input type="file" name="file" onChange={handleChange} id="img" />
      <button onClick={handleSubmit}>UploadImage</button>
    </>
  );
}
