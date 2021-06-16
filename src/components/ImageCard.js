import React from 'react'

const ImageCard = ({image}) => {

    console.log("imageCARD",image )
    console.log("sdfsddf",image.url )
    console.log("sdfsddf",image.url )
    console.log("sdfsddf",image.url )

    
     return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.download_url} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-blue-500 text-l mb-2">
          Author: {image.author}
        </div>
        <ul>
          <li>
            <strong>xxx</strong>   
          </li>
          <li>
            <strong>Download</strong>
            300
          </li>
          
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {image.width} X {image.height}
        </span>
         
        </div>

     
    </div>
    )
}

export default ImageCard
