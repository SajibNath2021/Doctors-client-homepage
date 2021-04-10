import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'


const BusinessInfo = () => {
    const infosData = [
        {
            title: 'Opening Hours',
            description: 'we are open 7 days',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit Our Location',
            description: 'Brooklyn, NY 10003 USA',
            icon: faMapMarker,
            background: 'dark'
        },
        {
            title: 'Call us now',
            description: '+155774545456',
            icon: faPhone,
            background: 'primary'
        }
    ]
    return (
        <section className='d-flex justify-content-center'>
            <div className="row w-75">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;