import React from 'react'
import { CounterData } from '../data'
import CountUp from "react-countup"

const Counter = () => {
    return (
        <section className='counter'>
            <div className='container' data-aos="fade-up">
                <div className='row'>
                    {CounterData.map((item, i) => (
                        <div className='col-md-6 col-lg-3 mb-md-4' key={i} data-aos="fade-up">
                            <div className='item'>
                                {item.icon}
                                <h3>
                                    <CountUp enableScrollSpy duration={2} end={item.count} />   {/* to increase the numbers */}
                                </h3>
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Counter