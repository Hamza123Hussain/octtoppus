import React from 'react'
import { enterpriseHero_bg_image, enterpriseSection } from '../Datasets/data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import HeroText from '../components/HeroText'
import './css/Enterprise.css'
import OurExpertise from '../components/OurExpertise'
import ScrollReveal from '../components/ScrollReveal'
import LanguageGrid from '../components/LanguageGrid'
import LinkButton from '../components/LinkButton'
import VerticalTabs from '../components/VerticalTabs'
import ReactGA from 'react-ga4'
import { Helmet } from 'react-helmet'

const Enterprise = () => {
  ReactGA.send({
    hitType: 'pageview',
    page: '/expertise',
    title: 'Our Expertise - Octtoppus',
  })

  return (
    <div className="enterprise-page-body">
      <Helmet>
        <title>Our Expertise | Octtoppus - Best Business Consultancy</title>
        <meta
          name="description"
          content="Octtoppus demonstrates a strategic focus on innovation, which is evident in its commitment to exploring emerging technologies to offer a wide range of technology services, covering areas such as web design and development, Software Development, E-commerce Solutions, Digital Marketing, Cloud Solutions, and Business Consultancy."
        />
        <meta
          name="keywords"
          content="octtoppus expertise, business consultancy, digital solutions, AI services, social media management, web development, corporate training"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Octtoppus" />
        <meta
          property="og:title"
          content="Our Expertise | Octtoppus - Best Business Consultancy "
        />
        <meta
          property="og:description"
          content="Expert business consultancy, digital solutions, and AI-driven services to elevate your business."
        />
        <meta
          property="og:image"
          content="https://www.octtoppus.com/images/logos/octtoppus.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Expertise | Octtoppus - Best Business Consultancy"
        />
        <meta
          name="twitter:description"
          content="Octtoppus demonstrates a strategic focus on innovation, which is evident in its commitment to exploring emerging technologies to offer a wide range of technology services, covering areas such as web design and development, Software Development, E-commerce Solutions, Digital Marketing, Cloud Solutions, and Business Consultancy."
        />
        <meta
          name="twitter:image"
          content="https://www.octtoppus.com/images/logos/octtoppus.png"
        />
      </Helmet>
      <div
        className="HeroC-container"
        style={{ backgroundImage: `url(${enterpriseHero_bg_image})` }}
      >
        <div className="hero-heading">
          <HeroText color="white">Follow the Octtoppus Way!</HeroText>
        </div>
        <ScrollReveal delay={600}>
          <p>
            We invite you to join us on this journey of growth and discovery.
            Whether you're a startup with a bold vision or an established
            enterprise seeking transformation, Octtoppus is here to take you by
            the hand and navigate the path to success. Embrace the power of
            eightfold expertise, and let's unlock the boundless potential that
            lies within your business.
          </p>
        </ScrollReveal>
      </div>
      <OurExpertise />
      <div className="enterpise-tabs">
        <ScrollReveal>
          <h2 className="verticalTab-title">Enterprise Solutions</h2>
        </ScrollReveal>
        <VerticalTabs tabs={enterpriseSection} />
        <ScrollReveal revealThreshold={100}>
          <div className="enterprise-btn">
            <LinkButton ButtonText="Learn More" ButtonLink="/services" />
          </div>
        </ScrollReveal>
      </div>
      <LanguageGrid />
    </div>
  )
}

export default Enterprise
