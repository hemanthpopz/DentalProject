import { Component } from 'react'
import { FaPhoneAlt, FaRegClock, FaArrowRight } from "react-icons/fa";

import { MdDateRange } from "react-icons/md";
import PatientAndDoc from '../Images/PatientAndDoc.jpg'

import Header from '../Header'


import './index.css'


class Home extends Component {
    render() {
        return <div className='container'>


            <div className='home-container'>
                <Header />
                <div className='home-content-container'>
                    <div className='home-text-container'>
                        <h1 className="logo-heading">Smile<span className="second-heading">More</span></h1>

                        <h2 className='home-second-des'>YOUR SMILE DESERVES OUR HIGHEST <span id='attention'>  ATTENTION</span></h2>

                        <div className='home-buttons-container'>

                          <a href='#we-care'><button type='button' className='aim-btn'>We Care</button></a>  
                            <a href='#service'> <button type='button' className='service-btn'>Our Services</button> </a>

                        </div>


                    </div>
                    <div className='cubes-container'>
                        <ul className='cubes-ul'>
                            <li>

                                <div className='first-text-container'>
                                    <h1 className='cube-heading'>Working Hours</h1>
                                    <FaArrowRight className='arrow-icon' />
                                </div>
                                <div className='second-text-container'>
                                    <FaRegClock className='clock-icon' />
                                    <div className='cube-second-text-container'>
                                        <p>MON - SAT</p>
                                        <p>9AM - 10PM</p>
                                    </div>


                                </div>
                            </li>
                            <li>

                                <div className='first-text-container'>
                                    <h1 className='cube-heading'>Book An Appointment</h1>
                                    <FaArrowRight className='arrow-icon' />
                                </div>
                                <div className='second-text-container'>
                                    <MdDateRange className='clock-icon' />



                                </div>
                            </li>
                            <li>

                                <div className='first-text-container'>
                                    <h1 className='cube-heading'>Working Hours</h1>
                                    <FaArrowRight className='arrow-icon' />
                                </div>
                                <div className='second-text-container'>
                                    <FaPhoneAlt className='clock-icon' />
                                    <div className='cube-second-text-container'>
                                        <p>EMERGENCY 24/7</p>
                                        <p>999-888-111</p>
                                    </div>


                                </div>
                            </li>
                        </ul>



                    </div>
                </div>
                <div id='we-care' className='we-care-container'>

                    <div className='we-care-image-container'>
                        <img className='we-care-image' alt='we-care' src={PatientAndDoc} />

                    </div>
                    <div className='we-care-text-container'>

                        <h1 className='we-care-heading'>We Care For Your Dental Health</h1>
                        <p className='we-care-p'>

                            We will probably instruct and teach the exceptionally imperative estimation of oral wellbeing and what every single patient can do to keep his or her teeth solid during their lifetime. We are committed to offering our patients great dentistry in a minding and delicate way.

                            Our best-in-class dental innovation, and in particular our proceeding with an expert training program for every one of the individuals from our dental group has a noteworthy influence in achieving that objective.
                        </p>
                        <button className='read-btn'>Read More</button>

                    </div>


                </div>
                <div id='service' className='services-container'>
                    <h1 className='service-heading'>Our Services</h1>

                    <ul  className='services-ul'>

                        <li>
                            <img className='icon' src='https://demo.yolotheme.com/trusmile/wp-content/uploads/2022/03/009-notes.png'/>
                            <h1 className='icon-heading'>General dentistry</h1>
                        </li>
                        <li>
                            <img className='icon' src='https://demo.yolotheme.com/trusmile/wp-content/uploads/2022/03/003-chair.png'/>
                            <h1 className='icon-heading'>Dental Surgery</h1>
                        </li>
                        <li>
                            <img className='icon' src='https://demo.yolotheme.com/trusmile/wp-content/uploads/2022/03/002-cleaned.png'/>
                            <h1 className='icon-heading'>Tooth Decay</h1>
                        </li>
                        <li>
                            <img className='icon' src='https://demo.yolotheme.com/trusmile/wp-content/uploads/2022/03/008-tooth.png'/>
                            <h1 className='icon-heading'>Tooth Whitening</h1>
                        </li>
                        <li>
                            <img className='icon' src='https://demo.yolotheme.com/trusmile/wp-content/uploads/2022/03/005-brace.png'/>
                            <h1 className='icon-heading'>Tooth Braces</h1>
                        </li>
                        
                        

                    </ul>
                </div>

            </div>


        </div>
    }
}

export default Home