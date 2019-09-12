import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';


const NasaCard = props => {
    return (
      <div>
        <Card>
          <CardTitle>{props.title}</CardTitle>
          <CardImg top width="75%" src={props.img} alt="NASA image" />
          <CardBody>
            <CardSubtitle>{props.date}</CardSubtitle>
            <CardText>{props.explain}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
  export default NasaCard;