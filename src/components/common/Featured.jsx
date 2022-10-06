import React from 'react'
import { featuredData } from '../../data'

const Featured = () => {
    return (
        <section className='Featured'>
            <div className='container'>
                <div className='row'>
                    {featuredData.map((item) => (
                        <div className='col-md-6 col-lg-3' data-aos="fade-up">
                            <div className='item'>
                                {item.icon}
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Featured