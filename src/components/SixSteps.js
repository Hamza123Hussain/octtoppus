import React from "react";
import './css/SixSteps.css';

const SixSteps = () =>{

    return(
        <div className="ss-container">
            {/* <p>this is SixSteps</p> */}
            <div className="group">
                <div className="steps-container odd">
                    <div className="gradient-border gb-one">
                        <div className="container-one">Plan</div>
                    </div>
                    <div className="gradient-border gb-two">
                        <div className="container-two">Define goals, roadmap, and resources for development.</div>
                    </div>
                </div>
                <div className="steps-container even">
                <div className="gradient-border gb-one">
                        <div className="container-one">Design</div>
                    </div>
                    <div className="gradient-border gb-two">
                        <div className="container-two">Create the product's user experience and functionality.</div>
                    </div>
                </div>
            </div>
            <div className="group">
                <div className="steps-container odd">
                <div className="gradient-border gb-one">
                        <div className="container-one">Develop</div>
                    </div>
                    <div className="gradient-border gb-two">
                        <div className="container-two">Build the product based on the designed specifications</div>
                    </div>
                </div>
                <div className="steps-container even">
                <div className="gradient-border gb-one">
                        <div className="container-one">Test</div>
                    </div>
                    <div className="gradient-border gb-two">
                        <div className="container-two">Validate the product functionality and usability</div>
                    </div>
                </div>
            </div>
            <div className="group">
                <div className="steps-container odd">
                <div className="gradient-border gb-one">
                        <div className="container-one">Launch</div>
                    </div>
                    <div className="gradient-border gb-two">
                        <div className="container-two">Release the product to the market</div>
                    </div>
                </div>
                <div className="steps-container even">
                <div className="gradient-border gb-one">
                        <div className="container-one">Support</div>
                    </div>
                    <div className="gradient-border gb-two">
                        <div className="container-two">Provide ongoing customer service and address feedback</div>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default SixSteps;