import React from 'react'
import { footerData } from '../../data'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h3>Our Social Networks</h3>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                        <div className='social mt-3'>
                            {footerData.map((item) => (
                                <a href={item.link}>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer