import React from 'react';
import { Spinner } from 'react-bootstrap';

const ErrorMessage = () => {
    return (
        <div>
            <div style={{height:'400px'}} className='w-100 d-flex justify-content-center align-items-center'>
             <Spinner animation="border" variant="success" />
        </div>
        <h2>Filled The Form Carefully</h2>
        </div>
    );
};

export default ErrorMessage;