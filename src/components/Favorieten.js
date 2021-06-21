import React, { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favorieten = () => {

  const [image, setFav] = useState([]);
  const favArr = [];
  const fav_data = localStorage.getItem("myFavorieten")

  

    if (fav_data != null) {
      console.log("[Favorieten]",JSON.parse(fav_data))

    //   favArr.push(JSON.parse(localStorage.getItem("myFavorieten")));
      favArr.push(JSON.parse(fav_data));
      console.log("favArr[favorieten]",favArr);
    }
  

    

  return (
    <div>
                  <Container>
      <h1 className="text-center" style={{ color: "#007bff" }}>Favorieten</h1>
      <Row className="justify-content-md-center my-5">

      {Object.keys(setFav).map(function(key,index) {
            return (<div key={key}>{image}this is a test</div>)
            })}


     {image ? (
        <Card style={{ width: '22rem' }} className="card rounded overflow-hidden shadow-lg">
          <Card.Img
            variant="top"
            src={image.download_url}
            alt="image"
            className="w-full"
          />
          <Card.Body>
            <Card.Title className="font-bold text-blue-500 text-l mb-4">
              <Link to={`/id/${image.id}/info`}>{image.author}</Link>
            </Card.Title>

          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {image.width} X {image.height}
            </small>
          </Card.Footer>
        </Card>
      ) : (
        <h1>Nog geen favorieten opgeslagen!</h1>
      )}
      </Row>
      </Container>
    </div>
  );
};

export default Favorieten;
