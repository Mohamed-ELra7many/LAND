import React from 'react'
import { servicesData } from '../data'

const Services = () => {
    return (
        <section className='sercices'>
            <div className='container'>
                <div className='heading-section' data-aos="zoom-in">
                    <h4>SERVICES</h4>
                    <h3>Check our<span> Services</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>
                <div className='row'>
                    {servicesData.map((item) => (
                        <div className='col-lg-4 col-md-6  d-flex align-items-stretch aos-init aos-animate' key={item.id} data-aos="zoom-in">
                            <div className='item'>
                                <div>
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services