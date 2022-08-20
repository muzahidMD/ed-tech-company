import React from 'react';
import './Services.css'
import Service from '../Home/Service';
import useServices from '../../Hooks/useServices';

const Products = () => {
    const [services, setServices] = useServices();

    return (
        <div id='products' className='container mx-auto my-10'>
            <h2 id='services' className='text-center my-5 text-3xl'>Available Services</h2>
            <div className='products-container '>
                {
                    services.slice(0, 4).map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Products;