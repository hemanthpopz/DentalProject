import { Component } from "react";
import Header from "../Header";
import aboutImage from '../Images/aboutImage2.jpg'
import aboutImage2 from '../Images/aboutImage3.jpg'
import certifiedDoctor from '../Images/certifiedDoctors.jpg'

import './index.css'


class About extends Component {
    render() {
        return <div className="about-container">
            <Header />
            <div className="about-content-container">
                <h1 className="about-text">About Us</h1>
                <div className="about-container1">
                    <div className="about-container1-text">

                        <h1 className="welcome-heading">Welcome</h1>
                        <p className="welcome-p">Smile More is popular and trusted dental service

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor aliquam aliquet. Morbi leo arcu, fermentum non aliquam vitae, tincidunt eget ex. Maecenas eget dignissim lectus, eget varius quam. Fusce aliquet ac risus id hendrerit. Sed faucibus dapibus euismod. Morbi cursus eros in justo gravida, et consequat urna efficitur. Quisque maximus felis non magna lobortis hendrerit. Morbi tincidunt
                        </p>

                    </div>
                    <div className="about-image-container">
                        <img className="about-image" src={aboutImage} />

                    </div>


                </div>

                <div className="about-container1">

                    <div className="about-image-container">
                        <img className="about-image2" src={aboutImage2} />

                    </div>

                    <div className="about-container1-text">

                        <h1 className="welcome-heading">Patient Satisfaction</h1>
                        <p className="welcome-p">Our first priority is patient Satisfaction

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor aliquam aliquet. Morbi leo arcu, Fusce aliquet ac risus id hendrerit. Sed faucibus dapibus euismod.  hendrerit. Morbi tincidunt
                        </p>

                    </div>


                </div>

                <div className="about-container1">
                    <div className="about-container1-text">

                        <h1 className="welcome-heading">Certified Doctors</h1>
                        <p className="welcome-p">Smile More has certified doctors and efficient treatment

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor aliquam aliquet. Morbi leo arcu, fermentum non aliquam vitae, tincidunt eget ex. Maecenas eget dignissim lectus, eget varius quam. Fusce aliquet ac risus id hendrerit. Sed faucibus dapibus euismod. Morbi cursus eros in justo gravida, et consequat urna efficitur. Quisque maximus felis non magna lobortis hendrerit. Morbi tincidunt
                        </p>

                    </div>
                    <div className="about-image-container">
                        <img className="about-image3" src={certifiedDoctor} />

                    </div>


                </div>


            </div>

        </div>
    }
}

export default About