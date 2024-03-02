import Navigation from '../Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCellsLarge, faSignal, faPaperPlane, faWallet, faCircleQuestion, faMobileScreenButton, faChevronDown, faChevronUp, faNairaSign } from '@fortawesome/free-solid-svg-icons'
import { Link, useResolvedPath, useMatch } from "react-router-dom"
import img12 from "../assets/image12.png"
import img13 from "../assets/image13.png"
import img14 from "../assets/image14.png"
import img15 from "../assets/image15.png"
import img16 from "../assets/image16.png"
import Toogle from './Toogle'
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
                        <FontAwesomeIcon className="icon" icon={faSignal} />
                        <p className='icon-one-title'>Buy Airtime & Data</p>
                    </div>
                    <div className="a-icon-one">
                        <FontAwesomeIcon className="icon" icon={faPaperPlane} />
                        <p className='icon-one-title'>Send Money</p>
                    </div>
                    <div className="a-icon-one">
                        <FontAwesomeIcon className="icon" icon={faWallet} />
                        <p className='icon-one-title'>Pay Bills</p>
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
                            <div className={accordionOpen?"accordion-height" : 'accordion-one'}>
                                <div className='accord-toggle'>
                                    <h3 className='accord-one-title'>Buy Airtime</h3>
                                    <FontAwesomeIcon className="accord-icon1" icon={faChevronUp} onClick={() => {
                                        setAccordionOpen(!accordionOpen)
                                    }}/>
                                </div>
                                <div className={accordionOpen? "accord-open" : 'accordion-one-body'}>
                                    <div className='input-container'>
                                        <input type="tel" className="accord-input-one" placeholder='Mobile Number' name="fname" />
                                        <div className='input-icon'>
                                            <FontAwesomeIcon className="input-icon" icon={faChevronDown} />
                                        </div>
                                    </div>
                                    <div className='ip-container'>
                                        <p className=''>Network Provider</p>
                                        <div>
                                            <img className="ip-img1" src={img13} alt='nigeria' />
                                            <img className="ip-img2" src={img14} alt='nigeria' />
                                            <img className="ip-img3" src={img15} alt='nigeria' />
                                            <img className="ip-img4" src={img16} alt='nigeria' />
                                        </div>
                                    </div>
                                    <div className='input-container-amount'>
                                        <input type="tel" className="accord-input-two" placeholder='Amount' name="fname" />
                                        <div className='input-icon-two'>
                                            <FontAwesomeIcon className="icon2" icon={faNairaSign} />
                                        </div>
                                    </div>
                                    <div className='toggle-section'>
                                        <Toogle onChange={(event) => setToggle(event.target.checked)} />
                                        <p className='toggle-label'>Save Beneficiary</p>
                                    
                                    </div>
                                    <button to="/sign-up" id="2" className="btn-airtime" >
                                            <p className="buy-spc">Pay</p>
                                        </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>

    )
}

