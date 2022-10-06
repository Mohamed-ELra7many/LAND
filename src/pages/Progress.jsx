import React from 'react'
import { Skils, Skils2 } from '../data'

const Progress = () => {
    return (
        <section className='progres'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        {Skils.map((item, i) => (
                            <div className='skills' key={i} data-aos="fade-up">
                                <div className='skill-text'>
                                    <span>{item.title}</span>
                                    <span>{item.percent}%</span>
                                </div>
                                <div className='skill'>
                                    <div className='item-skill' style={{ width: `${item.percent}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='col-lg-6'>
                        {Skils2.map((item, i) => (
                            <div className='skills' key={i} data-aos="fade-up">
                                <div className='skill-text'>
                                    <span>{item.title}</span>
                                    <span>{item.percent}%</span>
                                </div>
                                <div className='skill'>
                                    <div className='item-skill' style={{ width: `${item.percent}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Progress