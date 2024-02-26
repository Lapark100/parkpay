import { useState } from "react"
import Services from "./Services"
export default function OurServices ({data}) {
    const [services, setServices] = useState(data)
    return (
        <div className="service-container">
            <div className="service-header">
                <h2>Our Services</h2>
            </div>
            <div className="card-box">
            <Services data={data} />
            </div>
        </div>
    )
}