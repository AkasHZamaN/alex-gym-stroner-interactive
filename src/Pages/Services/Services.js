import React from 'react';
import useServices from '../../hooks/useServices';
import ServiceItem from './ServiceItem/ServiceItem';

const Services = () => {
    const [services] = useServices();
    
    return (
        <section>
            <article className='w-100 mx-auto row row cols-1 row-cols-lg-3 g-4 p-2'>
                {
                    services.map(service => <ServiceItem
                    key={service.id}
                    service={service}
                    ></ServiceItem> )
                }
            </article>
        </section>
    );
};

export default Services;