import React from 'react';
import './css/Services.css';
import { SmallCardData } from '../Datasets/data';
import HeroText from '../components/HeroText';
import Cards from '../components/Cards';
import Pyramid from '../components/Pyramid';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet';


const Services = () => {

    ReactGA.send({
        hitType: 'pageview',
        page: '/services',
        title: 'Our Services - The Octtoppus Way'
      })

    return (
            <div className='Services-page'>
              <Helmet>
                    <title>Our Services | Octtoppus</title>
                    <meta name="description" content="At Octtoppus, we empower businesses with tailored solutions, driving growth and enhancing control through collaborative partnerships. Our commitment to sustainability fosters long-term success while harnessing technology and data insights elevates brand value and resonates with audiences. Together, we shape a brighter future for businesses worldwide." />
                    <meta name="keywords" content="web development, software development, octtoppus ai, visual ai, graphic designing, Social media management, logo design" />
                    <meta name="robots" content="index, follow" />
                    <meta name="author" content="Octtoppus" />
                    <meta property="og:title" content="Our Services | Octtoppus" />
                    <meta property="og:description" content="At Octtoppus, we empower businesses with tailored solutions, driving growth and enhancing control through collaborative partnerships. Our commitment to sustainability fosters long-term success while harnessing technology and data insights elevates brand value and resonates with audiences. Together, we shape a brighter future for businesses worldwide." />
           
              </Helmet>
                <div className='Hero-container'>
                <HeroText color="white">Do What The Octtoppus Says!</HeroText>
              </div>
                <Pyramid />
                <div className='Serv-container'>
                    <h1 className='serv-main-heading'>What we offer</h1>
                    <div className="card-grid-container">
                        {SmallCardData.map((data, index) =>(
                            <Cards
                            key={data.id}
                            category={'services'}
                            title={data.name}
                            info={data.paragraph}
                            logos={data.logos}
                            />
                        ))}
                    </div>
                </div>
            </div>  
);
}

export default Services;