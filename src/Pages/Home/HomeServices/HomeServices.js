import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { SpeakerphoneIcon } from '@heroicons/react/solid';

const HomeServices = ({service}) => {
    const { serviceName, picture, price, details } = service;

  return (
    <section>
      <article className="my-3">
        <Card className="rounded-3 border-0">
          <Card.Img variant="top rounded-3" src={picture} />
          <Card.Body>
            <Card.Title className="text-success fw-bold text-opacity-100">{serviceName}</Card.Title>
            <p className="fw-bold">$ <span className="text-danger">{price}</span></p>
            <Card.Text>{details}</Card.Text>
            <Button variant="success opacity-75 w-100 text-white fw-bold d-flex justify-content-center align-items-center ">Hire Me <SpeakerphoneIcon style={{height: '22px', marginLeft: '2px'}} className="text-warning"></SpeakerphoneIcon></Button>
          </Card.Body>
        </Card>
      </article>
    </section>
  );
};

export default HomeServices;