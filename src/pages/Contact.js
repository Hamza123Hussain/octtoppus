import React from 'react';
import './css/Contact.css';
import { backendUrl } from '../Datasets/data';
import WhiteButton from '../components/WhiteButton';
import ScrollToScale from '../components/ScrollToScale';
import { linkedin, instagram, facebook } from '../Datasets/data';
import FormBold from '../components/FormBold';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet';

const Contact = () => {

    ReactGA.send({
        hitType: 'pageview',
        page: '/contact',
        title: 'Contact Us - Octtoppus'
      })
    
    return (
            <div className='contact-page-container'>
                <Helmet>
                    <title>Contact us | Octtoppus</title>
                    <meta name="description" content="Reach out to us for the Best Software service possible in affordable Prices" />
                    <meta name="keywords" content="contact octtoppus, call octtoppus, octtoppus number, reach out to octtoppus, octtoppus email, octtoppus uae" />
                    <meta name="robots" content="index, follow" />
                    <meta name="author" content="Octtoppus" />
                    <meta property="og:title" content="Contact us | Octtoppus" />
                    <meta property="og:description" content="Reach out to us for the Best Software service possible in affordable Prices" />
           
                </Helmet>
                <div className='contact-hero-container' style={{backgroundImage: `url(${backendUrl + 'images/bg-contact.jpg'})`}}>
                    <div className="hero-content">
                        <h1>Let's have a talk</h1>
                        <p>Call us today and we will assist you.</p>
                        <ScrollToScale initialScale={0} finalScale={1} delay={100}>
                            <WhiteButton name='Call Us Now' link="tel:+19725731699" />
                        </ScrollToScale>
                    </div>
                </div>
                <div className='contact-details-container'>
                    <div className='flex-box padding-md right-border address-container'>
                        <ScrollToScale initialScale={0} finalScale={1} delay={300}>
                            <h4>Address</h4>
                            <div className="address-list">
                                <h5>United Kingdom</h5>
                                <p>128 City Road, London, EC1V 2NX</p>
                                <p>Phone: <a style={{fontSize: '1.2rem'}} className='h-underline' href="tel:+447456452384">+44 7456 452384</a></p>
                            </div>
                            <div className="address-list">
                                <h5>Pakistan</h5>
                                <p>298 Q, Commerical Lane DHA Phase 2, Lahore, 54000</p>
                                <p>Landline: <a style={{fontSize: '1.2rem'}} className='h-underline' href="tel:+924235895711">+92 42 35895711</a></p>
                            </div>
                            <div className="address-list">
                                <h5>UAE</h5>
                                <p>Office # S16, Building # I-15 Morocco Cluster, International City, Dubai</p>
                                <p>Phone: <a style={{fontSize: '1.2rem'}} className='h-underline' href="tel:+19725731699">+1 972 573 1699</a></p>
                            </div>
                        </ScrollToScale>
                    </div>
                    <ScrollToScale initialScale={0} finalScale={1} delay={500}>
                    <div className='flex-box padding-md contact-area-container'>
            
                                <h4>Contact Us</h4>
                                {/* <h5>Email:</h5> */}
                                <div className="mail-container">
                                    <a className='h-underline' href="mailto:hello@octtoppus.com"><i className="fa-solid fa-envelope"></i>hello@octtoppus.com</a>
                                </div>
                                {/* <h5>Social Media:</h5> */}
                                <div className="social-container">
                                    <div className="linkedin-container">
                                        <a className='h-underline' href={linkedin} target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-linkedin"></i>
                                        <span className="social-text">Linkedin</span>
                                        </a>
                                    </div>
                                    <i className="c-ast fa-solid fa-asterisk"></i>
                                    <div className="facebook-container">
                                        <a className='h-underline' href={facebook} target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-facebook"></i>
                                        <span className="social-text">Facebook</span>
                                        </a>
                                    </div>
                                    <i className="c-ast fa-solid fa-asterisk"></i>
                                    <div className="instagram-container">
                                        <a className='h-underline' href={instagram} target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-instagram"></i>
                                            <span className="social-text">Instagram</span>
                                        </a>
                                    </div>
                                </div>
                    </div>
                    </ScrollToScale>
                </div>
                <div className="secondary-dark-bg">
                    <FormBold />
                </div>
            </div>

    );
}

export default Contact;
