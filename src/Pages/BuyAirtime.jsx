import Navigation from '../Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTableCellsLarge, faSignal, faPaperPlane, faWallet, faCircleQuestion, faMobileScreenButton, faChevronDown, faChevronUp, faNairaSign } from '@fortawesome/free-solid-svg-icons'
import { Link, useResolvedPath, useMatch } from "react-router-dom"
import img12 from "../assets/image12.png"
import Accordion from './accordion'
import Accordion1 from './accordion1'
import { useState } from 'react'
export default function BuyAirtime({ toogleChange }) {
    const [toogle, setToggle] = useState(false)
    const [accordionOpen, setAccordionOpen] = useState(false)


    return (
        <>
            <Navigation />
            <section className="buy-airtime-container">
                <nav className="side-bar">
                    <div className="a-icon-one">
                        <FontAwesomeIcon className="icon" icon={faTableCellsLarge} />
                        <p className='icon-one-title'>Dashboard</p>
                    </div>
                    <div className="a-icon-one">
                        
                        <Link to="/airtime" id="1" >
                        <FontAwesomeIcon className="icon" icon={faSignal} />
                    <p className="icon-one-title">Buy Airtime & Data</p>
                </Link>
                    </div>
                    <div className="a-icon-one">
                        
                        <Link to="/send" id="1" >
                        <FontAwesomeIcon className="icon" icon={faPaperPlane} />
                    <p className="icon-one-title">Send Money</p>
                </Link>
                    </div>
                    <div className="a-icon-one">
                    <Link to="/pay" id="1" >
                    <FontAwesomeIcon className="icon" icon={faWallet} />
                    <p className="icon-one-title">Pay Bills</p>
                </Link>
                        
                    </div>
                    <div className='help-btn'>
                        <Link to="#" id="1" className="airtime-btn" >
                            <p> <FontAwesomeIcon className="icon-help" icon={faCircleQuestion} /> Help</p>
                        </Link>
                    </div>
                </nav>
                <div className="airtime-body">
                    <div className='airtime-center'>
                        <div className="airtime-item">
                            <div className="airtime-header">

                                <h2 className="airtime-title"> <FontAwesomeIcon className="icon-header" icon={faMobileScreenButton} /> Buy Airtime & Mobile Data</h2>
                                <div className='airtime-img-cont'>
                                    <img className="airtime-img" src={img12} alt='nigeria' /> <FontAwesomeIcon className="img-icon" icon={faChevronDown} />
                                </div>
                            </div>
                            <Accordion />
                            <Accordion1 />
                        </div>

                    </div>

                </div>
            </section>
        </>

    )
}

