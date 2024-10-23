import React, {Component} from "react";
import './css/CallToAction.css';
import LinkButton from "./LinkButton";
import ScrollReveal from "./ScrollReveal";
import MainForm from "./MainForm";

class CallToAction extends Component{

    render(){
        return(
            <div className="call-to-action">
                <div className="above-container">
                <ScrollReveal>
                <h2>
                Empower Your Business with Octtoppus IT Solutions
                </h2>
                </ScrollReveal>
                <ScrollReveal>
                <p>
                Ready to take your business to the next level? Contact us today to schedule a consultation and discover how Octtoppus can empower your business with the latest in IT innovation. Together, let's build a brighter future for your enterprise.
                </p>
                </ ScrollReveal>
                </div>
                <div className="form-container">
                    <MainForm />
                </div>
               
            </div>
        );
    }
}

export default CallToAction;