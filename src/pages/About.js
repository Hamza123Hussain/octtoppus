import React from 'react';
import './css/About.css';
import HeroText from '../components/HeroText';
import ScrollReveal from '../components/ScrollReveal';
import { about_us_sections } from '../Datasets/data';
import Whychooseus from '../components/Whychooseus';
import TeamSection from '../components/TeamSection';
import PartnerLogoAnimation from '../components/PartnerLogoAnimation';
import AdvTextImage from '../components/AdvTextImage';
import LazyLoad from 'react-lazyload';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet';

const About = () => {

    ReactGA.send({
        hitType: 'pageview',
        page: '/about',
        title: 'About Us - Octtoppus'
      })



    return (
        <div className='about-page-body'>
            <Helmet>
            <title>About Us | Octtoppus - Your Trusted Business Consultancy</title>
            <meta name="description" content="Learn more about Octtoppus, our mission, values, and the expert team behind our business consultancy and digital solutions services." />
            <meta name="keywords" content="About Octtoppus, business consultancy, digital solutions, expert team, company mission, company values" />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Octtoppus" />
            <meta property="og:title" content="About Us | Octtoppus - Your Trusted Business Consultancy" />
            <meta property="og:description" content="Discover the story of Octtoppus, our vision, and how we empower businesses through our expert consultancy and digital solutions." />
            </Helmet>

            <div className='headline-container'>
                <HeroText>We are Octtoppus</HeroText>
                <ScrollReveal delay={600}>
                    <div className='sub-heading-container'> 
                        <h5>Your Trusted Business Consultant</h5>
                        <div className='background-bar'></div>
                    </div>
                </ScrollReveal>
            </div>
            <div className='about-us-sections-container'>
                {about_us_sections.map((data, index) => (
                    <LazyLoad height={700} offset={100} key={data.name}>
                        <AdvTextImage
                            heading={data.name}
                            paragraph={data.paragraph}
                            image={data.imagelink}
                        />
                    </LazyLoad>
                ))}
            </div>
            <Whychooseus />
            <div className="partner-logo-container">
                <PartnerLogoAnimation />
            </div>
            <div className="team_section_container">
                <TeamSection />
            </div>
        </div>
    );
}

export default About;
