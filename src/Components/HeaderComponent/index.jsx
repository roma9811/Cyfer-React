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
import { Link as ScrollLink } from 'react-scroll';
import HomeIcon from '@mui/icons-material/Home';
import ProductIcon from '@mui/icons-material/ShoppingCart'; 
import ServicesIcon from '@mui/icons-material/Build'; 
import WhyUsIcon from '@mui/icons-material/Help'; 
import ResourceIcon from '@mui/icons-material/Bookmark'; 
import AboutIcon from '@mui/icons-material/Info';

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
            <div className="generalContainer" id='home'>
                <div className="headerContainer">
                    <div className="navContainer">
                        <div className="Burger">
                            <Menu right={true} isOpen={isMenuOpen} onStateChange={handleStateChange}>
                                <ScrollLink className="bm-item" to="home" smooth={true} duration={700} onClick={closeMenu}><HomeIcon /> Home</ScrollLink>
                                <ScrollLink className="bm-item" to="product" smooth={true} duration={500} onClick={closeMenu}><ProductIcon /> Product</ScrollLink>
                                <ScrollLink className="bm-item" to="services" smooth={true} duration={500} onClick={closeMenu}><ServicesIcon /> Services</ScrollLink>
                                <ScrollLink className="bm-item" to="why-us" smooth={true} duration={500} onClick={closeMenu}><WhyUsIcon /> Why Us</ScrollLink>
                                <ScrollLink className="bm-item" to="resources" smooth={true} duration={500} onClick={closeMenu}><ResourceIcon /> Resource</ScrollLink>
                                <ScrollLink className="bm-item" to="about" smooth={true} duration={500} onClick={closeMenu}><AboutIcon /> About</ScrollLink>
                            </Menu>
                        </div>
                        <div className="cyfer">
                            <img src={Logo} alt="logo" height={50} />
                        </div>
                        <div className="nav">
                            <ul>
                                <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
                                <li><ScrollLink to="product" smooth={true} duration={500}>Product</ScrollLink></li>
                                <li><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></li>
                                <li><ScrollLink to="why-us" smooth={true} duration={500}>Why Us</ScrollLink></li>
                                <li><ScrollLink to="resources" smooth={true} duration={500}>Resources</ScrollLink></li>
                                <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
                                </li>
                            </ul>
                        </div>
                        <div className="btn">
                            <ScrollLink to='contact' smooth={true} duration={500}><Button variant="contained" color="primary">Contact now</Button></ScrollLink>
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
                               <ScrollLink to='contact' smooth={true} duration={500}><Button variant="contained" color="primary">Contact Us</Button></ScrollLink> 
                                <Button variant="outlined" color="secondary" sx={{ color: 'white', borderColor: '#742EFF' }}>Learn More</Button>
                            </div>
                        </div>
                        <div className="arworkContainer">
                            <div className="asset"><img src={Asset} alt="" /></div>
                            <div className="arwork"><img src={Arwork} alt="" /></div>
                        </div>
                        <div className="smart"><img src={Smart} alt="" /></div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};
