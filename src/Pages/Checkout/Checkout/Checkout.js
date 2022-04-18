import React from "react";
import { Toast } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  return (
    <div className="w-100 mx-auto">
      <Toast className="w-75 mx-auto my-5">
        <Toast.Header>
          <img style={{height:'90px'}} src="https://i.postimg.cc/d1vXyrwS/alex-gym-stone.png" className="rounded me-2" alt="" />
          <strong className="me-auto text-success fw-bold">Alex GYM <span className="text-warning">Stone</span></strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body className="text-center text-success fw-bold">Thanks for Hire Me!!</Toast.Body>
      </Toast>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
