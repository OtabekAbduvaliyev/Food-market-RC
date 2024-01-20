import React from 'react'
import { useState } from 'react'
import frecimg from '../images/order 1.png'
import delivery from '../images/delivery 1.png'
import curier from '../images/courier 1.png'
export const Section = () => {
    const [meals, setMeals] = useState([
        { id: 1, img: frecimg, heading: 'Easy To Order', des: 'You only order through the app' },
        { id: 2, img: delivery, heading: 'Easy To Order', des: 'You only order through the app' },
        { id: 3, img: curier, heading: 'Easy To Order', des: 'You only order through the app' }
    ])
    return (
        <div>
            <section className='max-w-[1000px] m-auto'>
                <p className='text-yellow-400 text-xl font-semibold text-center mt-20'>How it works</p>
                <h2 className='text-2xl font-bold mt-2 text-center'>What We Serve</h2>
                <p className='text-gray-400 text-base mt-5 text-center'>Product Quality Is Our Priority, And Always Guarantees <br /> Halal And Safety Until It Is In Your Hands.</p>
                <div className="conatiner flex text-center justify-between mt-6 flex-wrap gap-5 m-auto arr-sec">
                    {meals.map((data) => {
                        return (
                            <div key={data.id}>
                                <img src={data.img} alt="img" />
                                <h3 className='font-semibold text-3xl mt-6'>{data.heading}</h3>
                                <p className='text-gray-400 w-[184px] mt-4'>{data.des}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
export default Section