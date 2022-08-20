import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Product = ({ service }) => {
    const { id, name, price, description, img, mentor } = service;
    const navigate = useNavigate();

    const navigateToProductDetail = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <div className=''>
            <Card className='card' style={{ width: '100%', border: '1px solid #00896F' }}>
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
                    <div className='d-flex justify-content-center'>
                        <button className='button' onClick={() => navigateToProductDetail(id)}>Details</button>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;