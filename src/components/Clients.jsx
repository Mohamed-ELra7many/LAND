import React from 'react'
import { clintesData } from '../data'

const Clients = () => {
    return (
        <section className='clients'>
            <div className='container' data-aos="zoom-in">
                <div className='row'>
                    {clintesData.map((item, i) => (
                        <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'
                            key={i} data-aos="zoom-in">
                            <img className=' img-fluid' src={item.image} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Clients