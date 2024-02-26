import {React, useEffect, useRef} from "react"
import { motion, useAnimation, useInView } from "framer-motion" 
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function CallToAction() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    },[isInView])

    return (
        <div className="call-to-action-container">
            <motion.div 
            ref={ref}
        
        variants={{
            hidden:{opacity: 0, y: -190},
            visible:{opacity: 1, y:0},
        }} 
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5, delay: 0.75}}
            className="call-to-action-details">
                <h3 className='call-text-1'>Try Parkpay Now</h3>
                <h2 className='call-header'>Start transacting in just 20 minutes</h2>
                <button id="1" className="btn-call">
                    Get Started
                </button>
            </motion.div>
        </div>
    )
}