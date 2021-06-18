import React from "react";
import { MdCloudDownload } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { CardDeck, Card, Container,Row } from "react-bootstrap";

const ImageCard = ({ image }) => {
  return (
     <CardDeck>
       <Card className="card rounded overflow-hidden shadow-lg">
        <Card.Img
          variant="top"
          src={image.download_url}
          alt=""
          className="w-full"
        />
        <Card.Body>
          <Card.Title className="font-bold text-blue-500 text-l mb-2">
            Author: {image.author}
          </Card.Title>

          <Container>
            <Row>
               
              <MdCloudDownload
                onClick={() => (window.location.href = `${image.download_url}`)}
                className="col-2 inline-block download-btn"
              />
              <IoIosHeart className="col-2" />
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
