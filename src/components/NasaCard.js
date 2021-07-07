import React from "react";
import {
    Card, CardImg, CardText, CardBody
  } from 'reactstrap';
  import styled from "styled-components";

const NasaCard = props => {
    return (
      <div>
        <Card>
          <Title>{props.title}</Title>
          <CardImg top width="60%" src={props.img} alt="NASA image" />
          <CardBody>
            <Date>{props.date}</Date>
            <CardText>{props.explain}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
  export default NasaCard;

const Title = styled.div`
  font-weight: bold;
  font-size: 3rem;
  padding-bottom: 2%;
  
`;

const Date = styled.div`
  font-style: italic;
`;