// eslint-disable-next-line
import React, { useState, useEffect} from 'react' 
import ImageCard from './components/ImageCard'
import {IconContext} from 'react-icons'
import NavigationBar from './components/NavigationBar';
import {FormControl, InputGroup, Row ,Container} from "react-bootstrap"

function App() {
  
  const API_URL = 'https://picsum.photos/v2/list'
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState()
  const [visible, setVisible] = useState()
  const [search, setSearch] = useState('')
 

useEffect(() => {
  setIsLoading(true)
  fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    setImages(data)
    setIsLoading(false)
    })
  .catch(error => {
    setError(error)
    setVisible(false)
  })
  
}, [])

 
if(isLoading) return <h2 className="justify-content-md-center">Photos Loading...</h2>

if (error) return <h2>Error..</h2>

const filterAuthor = images.filter( image => {
 return image.author.toLowerCase().includes( search.toLowerCase() )
})

  return (
    <IconContext.Provider value={{ color: "#5d80f2", size: "2em"}}>
      <NavigationBar/>
      <Container>
        <Row className="justify-content-md-center my-5">
        <InputGroup className="mb-3">
     <FormControl
      onChange={ e => setSearch(e.target.value)}
      placeholder="Search author"
      aria-label="search author"
     />
  </InputGroup>
     
      {/* <input placeholder="Search" variant="outline-primary" onChange={ e => setSearch(e.target.value)}/> */}
  
    </Row>
    </Container>
  
     <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">

         {filterAuthor.slice(0,visible).map(image => (
        
            <ImageCard key={image.id} image={image}/>
       
         ))}
      </div>
    </div>
    </IconContext.Provider>

  );
}

export default App;
