import React from 'react';
import { Helmet } from 'react-helmet';
import { contact_form_bg } from '../Datasets/data';
import FormBold from '../components/FormBold';

const ContactForm = () =>{


    return(
        <div>
            <Helmet>
            <title>Contact Form | Contact Octtoppus for best digital solutions</title>
            <meta name="description" content="Octtoppus provides expert business consultancy, digital solutions, and AI-driven services. Boost your business with our tailored solutions and innovative strategies." />
            <meta name="keywords" content="business consultancy, digital solutions, AI services, social media management, web development, corporate training" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Octtoppus" />
            <meta property="og:title" content="Contact Form | Contact Octtoppus for best digital solutions" />
            <meta property="og:description" content="Expert business consultancy, digital solutions, and AI-driven services to elevate your business." />
            <meta property="og:image" content="https://www.octtoppus.com/images/logos/octtoppus.png" />
            <meta property="og:url" content="https://www.octtoppus.com/contact-form" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Contact Form | Contact Octtoppus for best digital solutions" />
            <meta name="twitter:description" content="Boost your business with expert consultancy and digital solutions from Octtoppus." />
            <meta name="twitter:image" content="https://www.octtoppus.com/images/logos/octtoppus.png" />
            </Helmet>
            <div style={{height: '350px',backgroundImage: `url(${contact_form_bg})`,backgroundPosition: 'center center'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <h1 style={{color: 'white'}}>Contact Form</h1>
                </div>
            </div>
            <div style={{margin: '30px 0px'}}>

                <FormBold background='light' />

            </div>
        </div>
    );
}

export default ContactForm;