import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    const { _id, name, price, description, img, mentor } = service;

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId]);

    return (
        <div>
            <h2 className='text-center text-3xl text-primary font-bold italic my-10 '> Service Details</h2>
            <Card className='mx-auto' style={{ width: '25%', border: '1px solid #00896F' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <strong> <i>{name}</i> </strong> </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        <strong>Price:</strong> ${price}
                        <div className='d-flex align-items-center justify-content-between'>
                            <p><small><strong> Mentor:</strong> {mentor} </small></p>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;