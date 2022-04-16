import React from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <section>
      <article className="">
        <Carousel>
          <Carousel.Item>
            <img
                style={{height: '550px'}}
              className="d-block w-100"
              src="https://img.freepik.com/free-vector/realistic-fitness-facebook-cover_23-2149236554.jpg?w=1060"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>The health channel!!</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
                style={{height: '550px'}}
              className="d-block w-100"
              src="https://img.freepik.com/free-vector/flat-design-fitness-twitch-banner_23-2149224811.jpg?w=1380&t=st=1650145312~exp=1650145912~hmac=ae2d5fd30b671c2117bf26fb32a9db3b862a7b20cce99a1fd584cda9e7215038"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>The health channel!!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
                style={{height: '550px'}}
              className="d-block w-100"
              src="https://img.freepik.com/free-vector/gradient-fitness-facebook-cover_23-2149229870.jpg?t=st=1650142867~exp=1650143467~hmac=0cc25d2b017198294a331316dd2425f527ef2e850db27dee772d7f2407594133&w=1380"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>The health channel!!</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </article>
    </section>
  );
};

export default Home;
