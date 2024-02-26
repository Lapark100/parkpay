import {React, useEffect, useRef} from "react"
import img10 from "./assets/image9.svg"
import img5 from "./assets/image5.svg"
import img7 from "./assets/image7.svg"
import { motion, useAnimation, useInView } from "framer-motion"
export default function SubMenu() {

const ref1 = useRef(null)
const ref2 = useRef(null)
const isInView = useInView(ref1, {once: true})
const isInView1 = useInView(ref2, {once: true})

const mainControls1 = useAnimation();
const mainControls2 = useAnimation();

useEffect(() => {
    if(isInView) {
        mainControls1.start("visible")
    } 
}, [isInView])

useEffect(() => {
    if(isInView1) {
        mainControls2.start("visible")
    } 
}, [isInView1])


    return (
        <div className="sub-menu-container">
            <div className="feature-one-container">
                <motion.div ref={ref1}
        
        variants={{
            hidden:{opacity: 0, x: -105},
            visible:{opacity: 1, x:0},
        }} 
        initial="hidden"
        animate={mainControls1}
        transition={{duration: 0.5, delay: 0.25}}
                 className="feature-one-desc">
                    <h2 className="feature-one-title">Seamless Transactions</h2>
                    <p className="feature-one-p">Making transactions quick and convinient</p>
                </motion.div>
                <div className="feature-one-img">
                    <img className="feature-one-img" src={img7} alt="card" style={{paddingLeft: "0em"}}/>
                </div>
            </div>
            <div className="feature-two-container">
                <div className="feature-two-img">
                    <img className="feature-two-img" src={img5} alt="card" />
                </div>
                <motion.article 
                ref={ref2}
        
        variants={{
            hidden:{opacity: 0, x: 105},
            visible:{opacity: 1, x:0},
        }} 
        initial="hidden"
        animate={mainControls2}
        transition={{duration: 0.5, delay: 0.65}}
                className="feature-two-desc">
                    <h2 className="feature-two-title">Enhanced Security</h2>
                    <p className="feature-two-p"> State-of-the-art security measures</p>
                </motion.article>
            </div>
        </div>
    )
}



