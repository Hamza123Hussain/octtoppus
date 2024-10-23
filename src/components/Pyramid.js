import React, { useState } from "react";
import { backendUrl } from "../Datasets/data";
import './css/Pyramid.css'

const Pyramid = () => {
    const url = backendUrl + 'images/pyramid/1x/';
    const [barValue, setBarValue] = useState(0);

    const handleMouseLeave = () =>{

        setBarValue(0);
    }

    const handleMouseEnter = (value) => () => {
        setBarValue(value);
    };



    return(
        <div className="pyramid-container">
                    <h3>                 
                        The Octtoppus Way requires six actions to achieve Operational Excellence
                    </h3>
            <div className="pyramid-sub-container">
                <div className="pyramid-left-container">
                
                        <div className="paragraph-container">
                            <div className="p-sub-container" onMouseEnter={handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                            <div className="thin-line-divider"></div>
                            <p>Define your organisation's purpose to thrive. Conduct annual audits to align with long-term goals and ensure progress.</p>
                            </div>
                            <div className="p-sub-container" onMouseEnter={handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                            <div className="thin-line-divider"></div>
                            <p>Set the right values to achieve your strategic vision. Foster a growth, trust, and collaboration culture for everyone to thrive in a supportive environment.</p>
                            </div>
                            <div className="p-sub-container" onMouseEnter={handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
                            <div className="thin-line-divider"></div>
                            <p>Develop effective management strategies that encourage skills, improve competencies, and reward positive behaviour to lead effectively.</p>
                            </div>
                            <div className="p-sub-container" onMouseEnter={handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
                            <div className="thin-line-divider"></div>
                            <p>Craft beneficial technical systems, experiment with viable solutions, and capitalise on opportunities.</p>
                            </div>
                            <div className="p-sub-container" onMouseEnter={handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
                            <div className="thin-line-divider"></div>
                            <p>Continuous improvement drives our technology capabilities, aligned with agile methodology and Kaizen principles</p>
                            </div>
                            <div className="p-sub-container" onMouseEnter={handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>
                            <div className="thin-line-divider"></div>
                            <p>Regularly update your mature system to stay updated. Invest in training and education to fuel its growth and progress.</p>
                            </div>       
                        </div>
                </div>
                <div className="pyramid-right-container">
                    <div className="relative-container">
                        <div>
                            <img className="p-back" height={'700px'} src={url + 'back_tri.png'} alt="" />
                            <img className={`bar-image bar-1 ${barValue === 1 ? 'bar-hover-scale' : ''}`} onMouseEnter={handleMouseEnter(1)} onMouseLeave={handleMouseLeave} height={'90px'} src={url + 'Bar 1.png'} alt="" />
                            <img className={`bar-image bar-2 ${barValue === 2 ? 'bar-hover-scale' : ''}`} onMouseEnter={handleMouseEnter(2)} onMouseLeave={handleMouseLeave} height={'90px'} src={url + 'Bar 2.png'} alt="" />
                            <img className={`bar-image bar-3 ${barValue === 3 ? 'bar-hover-scale' : ''}`} onMouseEnter={handleMouseEnter(3)} onMouseLeave={handleMouseLeave} height={'90px'} src={url + 'Bar 3.png'} alt="" />
                            <img className={`bar-image bar-4 ${barValue === 4 ? 'bar-hover-scale' : ''}`} onMouseEnter={handleMouseEnter(4)} onMouseLeave={handleMouseLeave} height={'90px'} src={url + 'Bar 4.png'} alt="" />
                            <img className={`bar-image bar-5 ${barValue === 5 ? 'bar-hover-scale' : ''}`} onMouseEnter={handleMouseEnter(5)} onMouseLeave={handleMouseLeave} height={'95px'} src={url + 'Bar 5.png'} alt="" />
                            <img className={`bar-image bar-6 ${barValue === 6 ? 'bar-hover-scale' : ''}`} onMouseEnter={handleMouseEnter(6)} onMouseLeave={handleMouseLeave} height={'87px'} src={url + 'Bar 6.png'} alt="" />   
                        </div>
                        <div className="hover-text-container">
                            <p className={`bar-text bar-text-1 ${barValue === 1 ? 'text-visible' : ''}`} onMouseEnter={handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>Goal</p>
                            <p className={`bar-text bar-text-2 ${barValue === 2 ? 'text-visible' : ''}`} onMouseEnter={handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>Strategy</p>
                            <p className={`bar-text bar-text-3 ${barValue === 3 ? 'text-visible' : ''}`} onMouseEnter={handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>Act like a Leader</p>
                            <p className={`bar-text bar-text-4 ${barValue === 4 ? 'text-visible' : ''}`} onMouseEnter={handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>Master the Art of Timing</p>
                            <p className={`bar-text bar-text-5 ${barValue === 5 ? 'text-visible' : ''}`} onMouseEnter={handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>Cyber Mysteries</p>
                            <p className={`bar-text bar-text-6 ${barValue === 6 ? 'text-visible' : ''}`} onMouseEnter={handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>People Training</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Pyramid;