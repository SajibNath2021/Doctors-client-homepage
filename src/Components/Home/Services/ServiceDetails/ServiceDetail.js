import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center ">
            <img className='' style={{height: '50px'}} src={service.img} alt=""/>
            <h5 className='mt-4 mb-4'>{service.name}</h5>
            <p className="text-secondary mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, accusantium!</p>
        </div>
    );
};

export default ServiceDetail;