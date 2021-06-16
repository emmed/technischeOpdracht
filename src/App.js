import React, { useState, useEffect} from 'react' 
import ImageCard from './components/ImageCard'


function App() {
  const API_URL = 'https://picsum.photos/v2/list'

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState()
  
useEffect(() => {
  setIsLoading(true)
  fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    setImages(data)
    setIsLoading(false)
    console.log("Author: " + data[1].author, "+ id: " +  data[1].id)
    // console.log("binnen img",images[1].author)
  })
  .catch(error => setError(error))
}, [])

 
if(isLoading) return <p>Data is loading...</p>

if (error) return <h2>Error..</h2>

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
       
         {images.map(image => (
            //  <div key={index}>
            //  <div>{image.id}</div>
            //  <div>{image.author}</div>
            //  <img src={image.download_url} alt="img" />
            //  </div>
           
        <ImageCard key={image.id} image={image}/>
         ))}
      </div>
    </div>
  );
}

export default App;
