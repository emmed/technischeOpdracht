import React, {useState} from "react";
import { MdCloudDownload } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import { CardDeck, Card, Container,Row } from "react-bootstrap";
 
const ImageCard = ({ image }) => {

  const [overHeart, setOverHeart] = useState(false);
  const [overCloud, setOverCloud] = useState(false);


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
          <Card.Title className="font-bold text-blue-500 text-l mb-4">
           <a href={`/id/${image.id}/info`}> Author: {image.author}</a>
          </Card.Title>

          <Container>
            <Row>
            <div className="col">

              <MdCloudDownload 
                onClick={() => (window.location.href = `${image.download_url}`)}
                className=" inline-block download-btn"
                style={overCloud ? { color: "#007bff" } : {}}
                onMouseOver={() => setOverCloud(true)}
                onMouseLeave={() => setOverCloud(false)}
              />
              </div>
              <div className="col">
              <IoIosHeart
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
