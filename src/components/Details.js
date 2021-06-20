import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function Details(props) {
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    fetch(`https://picsum.photos/id/${props.match.params.id}/info`)
      .then((res) => res.json())
      .then((result) => {
        setInfoUser(result);
        console.log(result, "result");
      });
  }, []);

  return (
    <div className="container p-2">
      <Card className="rounded">
        <Card.Img
          xs={6}
          md={2}
          variant="top"
          src={infoUser.download_url}
          alt=""
          className="w-full"
        />
        <Card.Body>
          <Card.Title>{infoUser.author}</Card.Title>
          <Card.Text>
            This card has the details of the chosen picture.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {infoUser.width} X {infoUser.height}
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Details;
