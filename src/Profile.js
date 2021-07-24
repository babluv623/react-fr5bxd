import React from 'react';
import './style.css';
import UploadImage from './UploadImage.js';

export default function Profile() {
  return (
    <div>
      <h1>userProfile page</h1>
      <img src="" alt="" />
      <p>name : {}</p>
      <p>email : {}</p>
      <UploadImage />
    </div>
  );
}
