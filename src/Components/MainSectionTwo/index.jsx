import React from "react";
import "./SectionTwo.css";
import Clients from "../../Assets/Images/clients.png";
import Ball from "../../Assets/Images/ball.png";
import Asset2  from "../../Assets/Images/Asset2.png";
import Customer1 from "../../Assets/Images/customer1.png";
import Customer2 from "../../Assets/Images/customer2.png";
import Customer3 from "../../Assets/Images/customer3.png";
import Facebook from "../../Assets/Images/facebook.png";
import Twitter from "../../Assets/Images/twitter.png";
import Instagram from "../../Assets/Images/instagram.png";
import Asset from "../../Assets/Images/Asset.png";

export const MainSectionTwo =()=>{
    return(
        <div className="sectionTwo">
            <div className="testmonialContainer" id="why-us">
            <div className="testmonialsText">
                <div className="testimonials">Testimonials</div>
                <div className="clients">
                    <img src={Clients} alt="" height={40} />
                    <p>While you may think you are safe online, these real-life stories prove otherwise</p>
                </div>
            </div>
            </div>
            <div className="customersContainer">
                <div className="imgContainer">
                    <div className="ball"><img src={Ball} alt="ball" height={90}/></div>
                    <div className="asset2"><img src={Asset2} alt="asset2" height={130}/></div>
                </div>
               <div className="customers">
                    <div className="customer1">
                       <div className="customerBox">
                       <img src={Customer1} alt="" />
                        <h4>Wade Warren</h4>
                        <p>Co-founder of Superlink</p>
                        <div className="customerBox2">
                            <img src={Facebook} alt="facebook" />
                            <img src={Twitter} alt="twiiter" />
                            <img src={Instagram} alt="instagram" />
                        </div>
                       </div>
                       <div className="customerBox3">
                        <p>Lorem ipsum dolor sit amet consectetur. 
                            Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.
                        </p>
                       </div>
                    </div>
                    <div className="customer2">
                    <div className="customerBox">
                       <img src={Customer2} alt="" />
                        <h4>Wade Warren</h4>
                        <p>Co-founder of Superlink</p>
                        <div className="customerBox2">
                            <img src={Facebook} alt="facebook" />
                            <img src={Twitter} alt="twiiter" />
                            <img src={Instagram} alt="instagram" />
                        </div>
                       </div>
                       <div className="customerBox3">
                        <p>Lorem ipsum dolor sit amet consectetur. 
                            Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.
                        </p>
                       </div>
                    </div>
                    <div className="customer3">
                    <div className="customerBox">
                       <img src={Customer3} alt="" />
                        <h4>Wade Warren</h4>
                        <p>Co-founder of Superlink</p>
                        <div className="customerBox2">
                            <img src={Facebook} alt="facebook" />
                            <img src={Twitter} alt="twiiter" />
                            <img src={Instagram} alt="instagram" />
                        </div>
                       </div>
                       <div className="customerBox3">
                        <p>Lorem ipsum dolor sit amet consectetur. 
                            Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.
                        </p>
                       </div>
                    </div>
                </div>
            </div>
                <div className="assetImg">
                    <img src={Asset} alt="asset" height={220}/>
                </div>
        </div>
    )
}