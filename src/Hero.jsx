import {React, useEffect, useRef} from "react"
import phoneImg from './assets/image9.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import SubMenu from './SubMenu'
import CallToAction from './CallToAction'
import Footer from './Footer'
import { motion, useAnimation, useInView  } from "framer-motion"

export default function Hero({ data, footerData }) {


    return (
        <div className='hero-box'>
            <div className="hero-container">
                <div className="hero-center">
                    <article className="hero-section-one">
                        <h1 className="hero-title">Welcome to the future of finance</h1>
                        <p className="hero-p">Discover seamless payments with Parkpay technologies</p>
                        <button id="1" className="btn-hero">
                            Get Started
                        </button>
                    </article>
                    <article className='hero-section-two'>
                        <img src={phoneImg} className="hero-img" alt='phone' />
                    </article>
                </div>
            </div>
            <SubMenu />
            <CallToAction />
            <Footer footerData={footerData} />
        </div>

    )
}
