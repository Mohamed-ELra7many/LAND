import React from 'react'
import { AboutData } from '../data'
import image from "./about.jpg"

const About = () => {
    return (
        <section className='about' id='about'>
            <div className='container'>
                <div className='heading-section' data-aos="zoom-in">
                    <h4>ABOUT</h4>
                    <h3>Find Out More<span>About Us</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>
                <div className='row'>
                    <div className='col-lg-6' data-aos="fade-right">
                        <img className="img-fluid" src={image} alt="" />
                    </div>
                    <div className='col-lg-6 mt-md-2 text d-flex flex-column justify-content-center'>
                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        {AboutData.map((item) => (
                            <div key={item.id} data-aos="fade-up">
                                <span>
                                    {item.icon}
                                    <div>
                                        <h5>{item.head}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </span>
                            </div>
                        ))}

                        <p className="mb-0">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About