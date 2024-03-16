import {React, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faNairaSign } from '@fortawesome/free-solid-svg-icons'
import img13 from "../assets/image13.png"
import img14 from "../assets/image14.png"
import img15 from "../assets/image15.png"
import img16 from "../assets/image16.png"
import Toogle from './Toogle'


function Accordion(){
    const [toogle, setToggle] = useState(false)
    const [accordionOpen, setAccordionOpen] = useState(false)
    return <>

        <div className={accordionOpen ? "accordion-height" : 'accordion-one'}>
            <div className='accord-toggle'>
                <h3 className='accord-one-title'>Buy Airtime</h3>
                <FontAwesomeIcon className="accord-icon1" icon={accordionOpen ? faChevronDown : faChevronUp} onClick={() => {
                    setAccordionOpen(!accordionOpen)
                }} />
            </div>
            <div className={accordionOpen ? "accord-open" : 'accordion-one-body'}>
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
                <form action="/submit" method="POST">
                    <button type='submit' id="2" className="btn-airtime">
                        Pay
                    </button>
                </form>

            </div>
        </div>

    </>
}

export default Accordion