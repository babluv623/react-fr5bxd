import React, { useState } from 'react';
import UploadImage from './UploadImage.js';
export default function Register(props) {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Full Name: </label>
          <input type="text" id="name" placeholder="Enter Name" />
        </div>
        <div>
          <label htmlFor="email">Email address : </label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input type="password" id="password" placeholder="Password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password : </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <UploadImage />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
