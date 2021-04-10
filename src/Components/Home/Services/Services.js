import React from 'react';
import flowride from '../../../images/floride.png';
import cavetype from '../../../images/cavety.png';
import whitining from '../../../images/whitining.png'
import ServiceDetail from './ServiceDetails/ServiceDetail';
const serviceData =[
    {
        name: 'Fluoride Treatment',
        img:flowride
    },
    {
        name: 'Cavity Filling',
        img:cavetype
    },
    {
        name: 'Teeth Whitening',
        img:whitining
    },
]


const Services = () => {
    return (
        <section className="services-container mt-5">
          <div className="text-center">
              <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
              <h2 className="mt-3 mb-5">Services We Provide</h2>
          </div>

          <div className='d-flex justify-content-center'>
            <div className="row w-75 mt-5">
                {
                    serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;