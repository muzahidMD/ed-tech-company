import React from 'react';
import './Services.css'
import Service from '../Home/Service';
import useServices from '../../Hooks/useServices';

const Services = () => {
    const [services, setServices] = useServices();

    return (
        <div id='services' className='container mx-auto my-10'>
            <h2 className='text-center my-10 text-3xl font-bold italic '>Available Services</h2>
            <div className='services-container '>
                {
                    services.slice(0, 4).map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="items-center text-center mt-10 mb-5">
                <button className='btn-primary px-5 py-1 mt-3 rounded-md font-semibold text-lg'><span className='mr-4'>SEE all</span><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    );
};

export default Services;