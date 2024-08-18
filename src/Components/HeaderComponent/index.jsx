import React, { useState } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { stack as Menu } from 'react-burger-menu';
import "./Header.css";
import Logo from "../../Assets/Images/Logo.png";
import Unlocking from "../../Assets/Images/unlocking.png";
import Arwork from "../../Assets/Images/Arwork.png";
import Asset from "../../Assets/Images/Asset.png";
import Smart from "../../Assets/Images/Smart.png";

const theme = createTheme({
    palette: {
        primary: {
            main: '#742EFF',
        },
        secondary: {
            main: '#742EFF',
        },
    },
});

export const HeaderComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleStateChange = (state) => {
      setIsMenuOpen(state.isOpen);
    }
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    }
    return (
        <ThemeProvider theme={theme}>
            <div className="generalContainer">
                <div className="headerContainer">
                    <div className="navContainer">
                    <div className="Burger">
                        <Menu right isOpen={isMenuOpen} onStateChange={handleStateChange}>
                            <a className="bm-item" href="#home" onClick={closeMenu}>Home</a>
                            <a className="bm-item" href="#portfolio" onClick={closeMenu}>Portfolio</a>
                            <a className="bm-item" href="#about" onClick={closeMenu}>About me</a>
                            <a className="bm-item" href="#contact" onClick={closeMenu}>Contact Me</a>
                        </Menu>
                    </div>
                       
                        
                        <div className="cyfer">
                            <img src={Logo} alt="logo" height={50} />
                        </div>
                        <div className="nav">
                            <ul>
                                <li>Home</li>
                                <li>Product</li>
                                <li>Services</li>
                                <li>Why Us</li>
                                <li>Resources</li>
                                <li>About</li>
                            </ul>
                        </div>
                        <div className="btn">
                            <Button variant="contained" color="primary">Contact now</Button>
                        </div>
                    </div>
                    <div className="futureOfFinance">
                        <div className="unlocking">
                            <img src={Unlocking} alt="" height={80} />
                            <div className="unlockingText">
                                <p>
                                    In a digital age driven by innovation, cryptocurrency has emerged as a revolutionary force that is reshaping the way we perceive and interact with money. 
                                    At [Your Crypto Platform], we are your gateway to this exciting world of decentralized finance, empowering you to explore, invest, and transact with confidence.
                                </p>
                            </div>
                            <div className="twoBtn">
                                <Button variant="contained" color="primary">Contact Us</Button>
                                <Button variant="outlined" color="secondary" sx={{ color: 'white', borderColor: '#742EFF' }}>Learn More</Button>
                            </div>
                        </div>
                        <div className="arworkContainer"> 
                            <div className="asset"><img src={Asset} alt="" /></div>
                            <div className="arwork"><img src={Arwork} alt="" height={590} /></div>
                        </div>
                        <div className="smart"><img src={Smart} alt="" /></div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};
