import React from "react";
import "./SectionThree.css";
import Digital1 from "../../Assets/Images/digital1.png";
import Digital2 from "../../Assets/Images/digital2.png";
import Digital3 from "../../Assets/Images/digital3.png";
import Digital4 from "../../Assets/Images/digital4.png";
import Digital5 from "../../Assets/Images/digital5.png";
import Expertise from "../../Assets/Images/expertise.png";
import Frame from "../../Assets/Images/frame.png";
import Triangle3 from "../../Assets/Images/triangle3.png";
export const MainSectionThree = ()=> {
    return(
        <div className="sectionThree">
           <div className="partnersContainer" id="about">
                <div className="digitalPartners">
                    <h4>Our Digital Partners</h4>
                    <div className="digitalGrid">
                        <div className="digitalBox">
                            <img src={Digital1} alt="" />
                        </div>
                        <div className="digitalBox">
                        <img src={Digital2} alt="" />
                        </div>
                        <div className="digitalBox">
                        <img src={Digital3} alt="" />
                        </div>
                        <div className="digitalBox">
                        <img src={Digital1} alt="" />
                        </div>
                        <div className="digitalBox">
                        <img src={Digital4} alt="" />
                        </div>
                        <div className="digitalBox">
                        <img src={Digital5} alt="" />
                        </div>
                    </div>
                </div>
                <div className="credentials">
                    <div className="credentialsBtn">Our Credentials</div>
                    <div className="expertise">
                        <img src={Expertise} alt="" height={100} />
                        <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. Senectus morbi sit volutpat id egestas augue tempor. 
                            Augue faucibus est at curabitur adipiscing ornare nunc sem libero. Diam vivamus neque a fusce facilisis id ipsum cursus fermentum.
                        </p>
                    </div>
                    <div className="frame">
                        <img src={Frame} alt="" />
                    </div>
                </div>
           </div>
          <div className="triangle3">
            <img src={Triangle3} alt="" />
          </div>
        </div>
    )
}