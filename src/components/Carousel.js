import React from "react";
import { 
    SiOpenai, 
    SiPytorch, 
    SiMongodb, 
    SiReact, 
    SiScikitlearn,
    SiJavascript,
    SiGithub,
    SiPython
} from 'react-icons/si';

function Carousel() {
    return (
        <div>
            <div className="carousel-parent position-relative">
                <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5 animated-tech">Technologies I use</h1>

                <div className="gallery">
                    <span style={{'--i' : 1}}><SiOpenai color="#00A67E"/></span>
                    <span style={{'--i' : 2}}><SiPytorch color="#EE4C2C"/></span>
                    <span style={{'--i' : 3}}><SiPython color="#3776AB"/></span>
                    <span style={{'--i' : 4}}><SiReact color="#61DAFB"/></span>
                    <span style={{'--i' : 5}}><SiScikitlearn color="#F7931E"/></span>
                    <span style={{'--i' : 6}}><SiJavascript color="#F7DF1E"/></span>
                    <span style={{'--i' : 7}}><SiMongodb color="#47A248"/></span>
                    <span style={{'--i' : 8}}><SiGithub color="#181717"/></span>
                </div>
            </div>
        </div>
    );
}

export default Carousel;