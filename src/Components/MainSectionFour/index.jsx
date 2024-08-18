import React from "react";
import "./SectionFour.css";
import Blog from "../../Assets/Images/blog.png";
import Lorem from "../../Assets/Images/lorem.png";
import Frame695 from "../../Assets/Images/Frame695.png";
import Circle2 from "../../Assets/Images/circle2.png";
export const MainSectionFour =()=>{
    return(
        <div className="sectionFour">
            <div className="resourcesContainer">
                <div className="ourResourcesText">
                    <div className="ourResources">Our Resources</div>
                    <img src={Blog} alt="" height={50}/>
                </div>
            </div>
            <div className="sercurityBox">
               <div className="sercurity">
                <h4>Sercurity | 10 min read</h4>
                <img src={Lorem} alt="" height={70} />
                <p>Lorem ipsum dolor sit amet consectetur. 
                    Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.</p>
                    <span>August 4. 2023</span>
               </div>
               <div className="frame695">
                <img src={Frame695} alt="" height={500} />
               </div>
            </div>
            <div className="circle2">
                <img src={Circle2} alt="" />
            </div>
            <div className="sercurityimages">
                <div className="imagesBox">
                   <div className="imagesText">
                        <h4>Sercurity | 10 min read</h4>
                        <h3>Lorem ipsum dolor sit amet consectetur. Pretium amet facilisis.</h3>
                   </div>
                </div>
                <div className="imagesBox2">
                <div className="imagesText">
                        <h4>Sercurity | 10 min read</h4>
                        <h3>Lorem ipsum dolor sit amet consectetur. Pretium amet facilisis.</h3>
                   </div>
                </div>
                <div className="imagesBox3">
                <div className="imagesText">
                        <h4>Sercurity | 10 min read</h4>
                        <h3>Lorem ipsum dolor sit amet consectetur. Pretium amet facilisis.</h3>
                   </div>
                </div>
            </div>
        </div>
    )
}