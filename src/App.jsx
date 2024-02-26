import React, { useState } from "react";
import Navigation from "./Navigation";
import BuyAirtime from "./Pages/BuyAirtime";
import PayBills from "./Pages/PayBills";
import SendMoney from "./Pages/SendMoney";
import SignUp from "./Pages/SignUp";
import Hero from "./Hero";
import data from "./data"
import { Routes, Route} from "react-router-dom"

export default function App() {
        
    return(
        <>
          
          <Navigation />
            <div className="container">
            <Routes>
                <Route path="/home" element={<Hero />} />
                <Route path="/airtime" element={<BuyAirtime />} />
                <Route path="/send" element={<SendMoney />} />
                <Route path="/pay" element={<PayBills />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
            </div>
            
        </>
        
    )

}

