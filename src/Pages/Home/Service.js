import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, price, description, img, mentor } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className=''>
            <Card className='card' style={{ width: '100%', border: '1px solid #FF2E82' }}>
                <Card.Img variant="top" src={img} />
                <div >
                    <Card.Body className='py-6 px-4'>
                        <Card.Title><strong><i>{name}</i> </strong></Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            <strong>Price:</strong> ${price}
                            <div className='d-flex align-items-center justify-content-between'>
                                <p><small><strong> Mentor:</strong> {mentor} </small></p>
                            </div>
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <button className='btn-primary px-5 py-1 mt-3 rounded-md' onClick={() => navigateToServiceDetail(_id)}>Details</button>
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default Service;