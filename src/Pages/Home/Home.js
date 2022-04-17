import React from "react";
import { ArrowRightIcon } from '@heroicons/react/solid';
import { Button, Carousel } from "react-bootstrap";
import useServices from "../../hooks/useServices";
import HomeServices from "./HomeServices/HomeServices";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [services] = useServices();
    const navigate = useNavigate();

    const servicesItems = () => {
        navigate('/services');
    }
    
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
          </Carousel.Item>
          <Carousel.Item>
            <img
                style={{height: '550px'}}
              className="d-block w-100"
              src="https://img.freepik.com/free-vector/flat-design-fitness-twitch-banner_23-2149224811.jpg?w=1380&t=st=1650145312~exp=1650145912~hmac=ae2d5fd30b671c2117bf26fb32a9db3b862a7b20cce99a1fd584cda9e7215038"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
                style={{height: '550px'}}
              className="d-block w-100"
              src="https://img.freepik.com/free-vector/gradient-fitness-facebook-cover_23-2149229870.jpg?t=st=1650142867~exp=1650143467~hmac=0cc25d2b017198294a331316dd2425f527ef2e850db27dee772d7f2407594133&w=1380"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </article>
      {/* services area  */}
      <article>
        <h2 style={{fontFamily:'Vernon Adams, Cyreal, Jacques Le Bailly', fontWeight:'bolder', fontSize:'30px', color:'#02B290'}} className="text-center mt-4">Welcome to <span className="text-danger">Fitness Zone</span></h2>
      <article className='w-100 mx-auto row row cols-1 row-cols-lg-3 g-4 p-3'>
        {
          services.slice(0,3).map(service => <HomeServices
          key={service.id}
          service={service}
          ></HomeServices> )
        }
      </article>
      </article>

      <p className="text-center d-flex justify-content-center align-items-center g-2">
      <Button onClick={()=>servicesItems()} variant="outline-danger opacity-75  text-success fw-bold">See More <ArrowRightIcon style={{height: '22px'}}></ArrowRightIcon> </Button>
      </p>
      
    </section>
  );
};

export default Home;
