import React from "react";
import "./Footer.css";
import Logo from "../../Assets/Images/Logo.png";
import Twitter2 from "../../Assets/Images/Group8.png";
import Facebook2 from "../../Assets/Images/Vector61.png";
import Instagram from "../../Assets/Images/Group59.png";
export const FooterComponent =()=>{
    return(
        <div className="footer">
            <div className="footerContainer">
                <div className="footerLogo">
                    <img src={Logo} alt="logo" height={60} />
                    <p>Lorem ipsum dolor sit amet consectetur. 
                        Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.
                    </p>
                   <div className="socialLogo">
                        <img src={Twitter2} alt="" />
                        <img src={Facebook2} alt="" />
                        <img src={Instagram} alt="" />
                   </div>
                </div>
                <div className="ulListBox">
                    <div className="list">
                        <ul>
                            <li><span>Navigation</span></li>
                            <li>About Us</li>
                            <li>What we do</li>
                            <li>News</li>
                            <li>Projects</li>
                            <li>FAQ</li>
                            <li>Offices</li>
                        </ul>
                        <ul>
                            <li><span>Resources</span></li>
                            <li>About Us</li>
                            <li>What we do</li>
                            <li>News</li>
                            <li>Projects</li>
                            <li>FAQ</li>
                            <li>Offices</li>
                        </ul>
                        <ul>
                            <li><span>Contact Info</span></li>
                            <li>828 Timbercrest Road,Healy City, AK 99743</li>
                            <li>Telephone : + (012) 345 6789</li>
                            <li>Fax : + (012) 345 6789</li>
                            <li>Email : contact@cyfer.com</li>
                        </ul>
                    </div>
                </div>
               
            </div>
            <div className="copyright">
                <p>Copyright ©2023 Dotcreativemarket., Ltd. All right reserved</p>
                </div>
        </div>
    )
}