import React from 'react'

const Contact = () => {
    return (
        <section className='contact'>
            <div className='container' data-aos="fade-up">
                <div className='heading-section' data-aos="fade-up">
                    <h4>CONTACT</h4>
                    <h3><span>Contact Us</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>
                <div className='row'>
                    <div className='col-lg-6' data-aos="fade-up">
                        <div className='item mb-4'>
                            <i className='fa fa-map'></i>
                            <h3>Our Address</h3>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6' data-aos="fade-up">
                        <div className='item mb-4'>
                            <i className='fa fa-envelope'></i>
                            <h3>Email Us</h3>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6' data-aos="fade-up">
                        <div className='item mb-4'>
                            <i className='fa fa-phone'></i>
                            <h3>Call Us</h3>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <form>
                            <div className='row name-email'>
                                <div className='col'>
                                    <input className=' form-control mb-3' type="text" placeholder='Your Name' required />
                                </div>
                                <div className='col'>
                                    <input className=' form-control mb-3' type="email" placeholder='Your Email' required />
                                </div>
                            </div>
                            <input className=' form-control mb-3' type="text" placeholder='Subject' required />
                            <textarea className=' form-control mb-3' placeholder='Message' required />
                            <button>Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact