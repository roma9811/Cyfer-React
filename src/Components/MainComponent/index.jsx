import React from "react";
import "./Main.css";
import Market from "../../Assets/Images/market.png";
import Bitcoin from "../../Assets/Images/bitcoin.png";
import User from "../../Assets/Images/user.png";
import Different from "../../Assets/Images/different.png";
import Triangle from "../../Assets/Images/triangle.png";
import Cross from "../../Assets/Images/cross.png";
import Noutbook from "../../Assets/Images/noutbook.png";
import Discovery from "../../Assets/Images/discovery.png";
import Range from "../../Assets/Images/range.png";

export const MainComponent =()=>{
    return(
        <div className="mainContainer">
            <div className="statistic">
                <div className="market"> <img src={Market} alt="market" height={90} /></div>
                <div className="bitcoin"><img src={Bitcoin} alt="bitcoin" height={90} /></div>
                <div className="user"><img src={User} alt="user" height={90}/></div>
                <div className="different"><img src={Different} alt="different" height={90} /></div>
            </div>
            <div className="discoverContainer">
                <div className="triangle"><img src={Triangle} alt="triangle" height={150} /></div>
                <div className="cross"><img src={Cross} alt="cross" height={200} /></div>
                <div className="noutText">
                    <div className="noutbook"><img src={Noutbook} alt="noutbook" height={400} /></div>
                    <div className="discovery">
                        <img src={Discovery} alt="discovery" height={90}/>
                        <p className="discoveryText1">Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae.
                           Vitae vel proin quis iaculis. Senectus morbi sit volutpat id egestas augue tempor.
                           Augue faucibus est at curabitur adipiscing ornare nunc sem libero.
                        </p>
                        <p>Diam vivamus neque a fusce facilisis id ipsum cursus fermentum. 
                           Lectus mauris magna duis viverra velit vestibulum. Nunc sagittis amet enim pretium elit suscipit. 
                           Sagittis facilisi aliquet purus neque.
                        </p>
                    </div>
                </div>
            </div>
            <div className="product">
              <div className="productContainer">
                <div className="ourProduct">Our Product</div>
                <img src={Range} alt="range" height={40} width={650} />
            </div>
            </div>
            <div className="cryptoImages">
                <div className="sakura">
                    <h4>Sakura</h4>
                    <p> Vitae Vel Froin</p>
                </div>
                <div className="komorebi">
                    <h4>Komorebi</h4>
                    <p> Vitae Vel Froin</p>
                </div>
                <div className="yugen">
                    <h4>Yugen</h4>
                    <p> Vitae Vel Froin</p>
                </div>
            </div>
        </div>
    )
}