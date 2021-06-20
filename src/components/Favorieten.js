import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Favorieten = () => {
  const [image, setA] = useState();

  useEffect(() => {
    if (localStorage.getItem("myObject") != null) {
      const favArr = [];
      favArr.push(setA(JSON.parse(localStorage.getItem("myObject"))));
      console.log(favArr, "favorieten");
    }
  }, []);

  return (
    <div>
      <h1>Favorieten</h1>
      {image ? (
        <Card className="card rounded overflow-hidden shadow-lg">
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

            <Container>
              <Row>
                <div className="col">
                  {/* <MdCloudDownload 
                onClick={() => (window.location.href = `${image.download_url}`)}
                className=" inline-block download-btn"
                style={overCloud ? { color: "#007bff" } : {}}
                onMouseOver={() => setOverCloud(true)}
                onMouseLeave={() => setOverCloud(false)}
              /> */}
                </div>
                <div className="col">
                  {/* <IoIosHeart
              onClick={saveFavorieten}
               style={overHeart ? { color: "red" } : {}}
               onMouseOver={() => setOverHeart(true)}
               onMouseLeave={() => setOverHeart(false)}
              /> */}
                </div>
              </Row>
            </Container>
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
    </div>
  );
};

export default Favorieten;
