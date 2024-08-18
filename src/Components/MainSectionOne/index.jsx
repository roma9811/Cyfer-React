import React from "react";
import "./SectionOne.css";
import Stay from "../../Assets/Images/Stay.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Triangle2 from "../../Assets/Images/triangle2.png";
import Cubes3 from "../../Assets/Images/cubes3.png";
import Circle from "../../Assets/Images/circle.png";

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
export const MainSectionOne =()=>{
   
    return( 
    <ThemeProvider theme={theme}>
        <div className="sectionOne">
             <div className="ourServiceContainer">
                <div className="service">
                    <img src={Triangle2} alt="triangle2"  className="triangle2"/>
                    <div className="serviceBtn">Our Service</div>
                    <img src={Stay} alt="stay" height={100}/>
                </div>
                <div className="learnMore">
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. 
                        Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem libero.
                   </p>
                   <Button variant="contained" color="primary">Learn More</Button>
                </div>
             </div>
             <div className="parentContainer">
                <div className="gridContainer">
                    <div className="gridBox">
                        <img src={Cubes3} alt="" />
                        <h2>Crypto Exchange</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. 
                            Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem .
                        </p>
                    </div>
                    <div className="gridBox">
                    <img src={Cubes3} alt="" />
                    <h2>Wallet Services</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. 
                        Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem.
                    </p>
                    </div>
                    <div className="gridBox">
                    <img src={Cubes3} alt="" />
                    <h2>Resources</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. 
                        Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem.
                    </p>
                    </div>
                    <div className="gridBox">
                    <img src={Cubes3} alt="" />
                    <h2>Market Insights</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. 
                        Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem.
                    </p>
                    </div>
                    <div className="gridBox">
                    <img src={Cubes3} alt="" />
                    <h2>Security First</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. 
                        Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem.
                    </p>
                    </div>
                    <div className="gridBox">
                    <img src={Cubes3} alt="" />
                    <h2>User-Centric</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. 
                        Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem.
                    </p>
                    </div>
                    <div className="gridBox">
                    <img src={Cubes3} alt="" />
                    <h2>Variety</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. 
                        Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem.
                    </p>
                    </div>
                    <div className="gridBox">
                    <img src={Cubes3} alt="" />
                    <h2>Transparent Fees</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. 
                        Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem.
                    </p>
                    </div>
                </div>
             </div>
            <div className="circle">
                <img src={Circle} alt="" />
            </div>
        </div>
     </ThemeProvider>
    )
}