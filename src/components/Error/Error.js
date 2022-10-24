import React from 'react';
import "./Error.scss";
import {error} from "../../utils/images";

const Error = () => {
  return (
    <div className='container'>
        <div class = "flex flex-center error">
            <img src = {error} alt = "error" />
        </div>
    </div>
  )
}

export default Error