import React from 'react'
import { useState } from 'react'
import { portfolioData } from '../data'

const Portfolio = () => {
    const Category = ["ALL", ...new Set(portfolioData.map((item) => item.cat))]
    const [items, setItems] = useState(portfolioData)
    const [filter, setFilter] = useState(Category)
    const [slide, setSlide] = useState(0)
    const [open, setOpen] = useState(false)

    const FiltrationCat = (cat) => {
        const FilterItem = portfolioData.filter(item => item.cat === cat)
        setItems(FilterItem)
        if (cat === "ALL") {
            setItems(portfolioData)
        }
    }
    const handleMoveArrow = (dir) => {
        let slider;
        if (dir === "l") {
            slider = slide === 0 ? items.length - 1 : slide - 1
        } else {
            slider = slide === items.length - 1 ? 0 : slide + 1
        }
        setSlide(slider)
    }

    const HandleOpen = (i) => {
        setSlide(i)
        setOpen(true)
    }
    return (
        <section className='portfolio'>
            <div className='container'>
                <div className='heading-section' data-aos="fade-up">
                    <h4>PORTFOLIO</h4>
                    <h3>Check our<span> Portfolio</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>
                <div className='row'>
                    <div className='col-lg-12 d-flex justify-content-center'>
                        <ul>
                            {filter.map((item, i) => (
                                <li key={i} onClick={() => FiltrationCat(item)} data-aos="fade-up">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    {items.map((item, i) => (
                        <div className='col-lg-4 col-md-6 item filter-web' data-aos="fade-up">
                            <img src={item.image} alt="" onClick={() => HandleOpen(i)} />
                            <div className='text'>
                                <h3>{item.title}</h3>
                                <p>{item.cat}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {open && <div className='black-screen' data-aos="fade-up">
                    <i className='fa fa-close close' onClick={() => setOpen(false)}></i>
                    <i className='fa fa-arrow-circle-left arrow' onClick={() => handleMoveArrow("l")}></i>
                    <img src={items[slide].image} alt="" className=' img-fluid' />
                    <i className='fa fa-arrow-circle-o-right arrow' onClick={() => handleMoveArrow("r")}></i>
                </div>}
            </div>
        </section>
    )
}

export default Portfolio