import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/AkasHZamaN/Email-Authentication-phase/main/public/services.json")
        .then(res=>res.json())
        .then(data =>{
            const serviceInfo = data?.find(item => item.id === parseInt(serviceId));
            setItems(serviceInfo);
        })
    },[serviceId])
    

    return (
        <section>
            <p>Service Id: {serviceId}</p>
            {/* <p>Service Name: {items?.serviceName}</p> */}
            <article className='bg-danger opacity-75 w-50 py-3 mx-auto text-center rounded-3 text-white'>
                <img src="https://i.postimg.cc/d1vXyrwS/alex-gym-stone.png" alt="" />
                <p className='w-75 mx-auto'><small className='px-3'>{items?.details}</small></p>
                <h3 style={{fontFamily:'Vernon Adams, Cyreal, Jacques Le Bailly', fontWeight:'bold'}} >{items?.serviceName}</h3>
                <p>$ <span className='text-warning fw-bold fs-4'>{items?.price}</span> <span className='text-gray opacity-75'>/mo</span></p>

                <Link to='/checkout'>
                    <Button variant="outline-warning opacity-75 fw-bold text-white">Proceed To Checkout</Button>{' '}
                </Link>
            </article>
        </section>
    );
};

export default ServiceDetails;