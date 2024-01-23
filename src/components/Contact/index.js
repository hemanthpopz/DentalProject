import { Component } from "react";
import { MdLocationCity } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import  Header from '../Header'
 
import './index.css'

class Contact extends Component{
    render(){
        return <div className="contact-container">
            <Header/>
            <div className="contact-content-container">
                <div className="contact-heading-container">

                <h1 className="contact-heading">Contact Us</h1>
                </div>
                <div className="contact-ul-container">

                    <ul className="contact-ul">



                    <li>
                            <MdLocationCity className="contact-icon"/>
                            <p> 940 london st jhons street</p>
                            <p>Pin Code: 66890</p>
                        </li>

                        <li>
                            <FaPhoneVolume className="contact-icon" />
                            <p> (+01) 00983883 </p>
                            <p>  (+01) 00999667 </p>
                        </li>

                        

                        <li>
                            
                            <SlEnvolopeLetter className="contact-icon" />
                            <p>smileMore@gmail.com</p>
                            <p>smileMore1@gmail.com</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    }
}


export default Contact