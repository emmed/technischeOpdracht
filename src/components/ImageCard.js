import React from "react";
import { MdCloudDownload } from "react-icons/md";
import {Badge} from "react-bootstrap"


const ImageCard = ({ image }) => {
  


  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.download_url} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-blue-500 text-l mb-2">
          Author: {image.author}
        </div>
      </div>
      <div className="px-6 py-4">
        
       <Badge className="mr-3" variant="secondary">{image.width} X {image.height}</Badge>  
        
  
      <MdCloudDownload  onClick={()=> window.location.href=`${image.download_url}`}  className="inline-block download-btn" />
 
      </div>
    </div>
  );
};

export default ImageCard;
