import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Trainer = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        fetch('trainer.json')
            .then(res => res.json())
            .then(data => setTrainers(data))
    })


    return (
        <div id='trainer' className='container mx-auto my-10'>
            <h2 className='text-center my-10 text-3xl font-bold italic '>Our Trainer</h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10 container mx-auto'>
                {
                    trainers.map(trainer =>
                        <div key={trainer.id} className="card lg:w-80 bg-base-100" style={{ border: '1px solid #FF2E82' }}>
                            <div className="card-body ">
                                <h2 className="card-title">{trainer.name}</h2>
                                <p>{trainer.descri}</p>
                            </div>
                            <figure><img src={trainer.img} alt="Shoes" /></figure>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Trainer;