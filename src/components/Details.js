import React, {useState, useEffect} from 'react'
import { Card } from "react-bootstrap";

function Details (props)  {
    const API_URL = "https://picsum.photos/v2/list";

    const [infoUser, setInfoUser] = useState({})

    useEffect(() => {
        fetch(API_URL + props.match.params.id)
        .then(res => res.json())
        .then((result) => {
            setInfoUser(result)
        })
    })
    return (
        <Card>
      <Card.Img
          variant="top"
          src={infoUser.download_url}
          alt=""
          className="w-full"
        />
    <Card.Body>
      <Card.Title>{infoUser.author}</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{infoUser.width} X {infoUser.height}</small>
    </Card.Footer>
  </Card>
    )
}

export default Details
