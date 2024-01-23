import { Component } from "react";

import { PiToothFill } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import {Link} from 'react-router-dom'
import './index.css'


class Header extends Component{
    state={
        toShowSmNav:false
    }

    toChangeNav = () =>{

        const {toShowSmNav} = this.state

        this.setState({
            toShowSmNav:!toShowSmNav
        })
    }

    render(){

        const {toShowSmNav} = this.state
        return <>
         <nav>

            <div className="logo-container">
               <PiToothFill className="logo"/>
                <h1 className="logo-heading">Smile<span className="second-heading">More</span></h1>
            </div>
            <ul className="nav-ul lg-nav">
                <Link className="nav-link" to='/'>
                <li>
                    <p>Home</p>
                </li>
                </Link>

                <Link className="nav-link" to='/about'>
                
                <li>
                <p>About</p>
                </li>
                </Link>
                <Link className="nav-link" to='/contact'>
                <li>
                <p>Contact</p>
                </li>
                </Link>
            </ul>
            <button  onClick={this.toChangeNav} aria-label="Mute-Volume" className="menu-btn menu-icon">

                <IoMenu className="menu-icon"/>
            </button>

            
            

        </nav>

        {
            toShowSmNav !== true ? null: <div className="sm-nav">
            <ul>
                <Link className="nav-link" to='/'>
                
                <li>
                    <p>Home</p>
                </li>
                </Link>
                <Link className="nav-link" to='/about'>
                <li>
                    <p>About</p>
                </li>
                </Link>
                <Link className="nav-link" to='/contact'>
                <li>
                    <p>Contact</p>
                </li>
                </Link>
            </ul>

        </div>
        }
        
        </>
    }
}


export default Header