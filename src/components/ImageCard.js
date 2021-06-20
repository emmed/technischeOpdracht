import React, { useState } from "react";
import { MdCloudDownload } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { CardDeck, Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ImageCard = ({ image }) => {
  const [overHeart, setOverHeart] = useState(false);
  const [overCloud, setOverCloud] = useState(false);

  const saveFavorieten = () => {
    const favArr = [];

    favArr.push(localStorage.setItem("myObject", JSON.stringify(image)));
    console.log(favArr);
  };

  return (
    <CardDeck>
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
                <a download href={image.download_url}>
                  <MdCloudDownload
                    className="inline-block download-btn"
                    style={overCloud ? { color: "#007bff" } : {}}
                    onMouseOver={() => setOverCloud(true)}
                    onMouseLeave={() => setOverCloud(false)}
                  />
                </a>
              </div>
              <div className="col">
                <IoIosHeart
                  onClick={saveFavorieten}
                  style={overHeart ? { color: "red" } : {}}
                  onMouseOver={() => setOverHeart(true)}
                  onMouseLeave={() => setOverHeart(false)}
                />
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
    </CardDeck>
  );
};

export default ImageCard;
