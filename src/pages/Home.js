/**
 * Home Component
 *
 * This component represents the home page of the Octtoppus website.
 * It includes various sections such as hero, about, industries, vision, and contact form.
 *
 * Key Features:
 * - Responsive design with video backgrounds
 * - Scroll reveal animations for enhanced user experience
 * - Lazy loading of components for improved performance
 * - Integration with Google Analytics for tracking
 * - SEO optimization using React Helmet
 *
 * Components Used:
 * - LinkButton: Custom button component for navigation
 * - ScrollReveal: Animates elements as they enter the viewport
 * - IndustriesSection: Displays industries served by Octtoppus
 * - ScrollToScale: Animates elements with scaling effect on scroll
 * - MovingGradient: Applies a moving gradient effect to text
 * - LazyLoad: Enables lazy loading of images and components
 * - FormBold: Contact form component
 * - AdvTextImage: Displays text with an associated image
 * - TeamCompanies: Shows information about team and partner companies
 *
 * Notable Functions:
 * - ReactGA.send(): Sends pageview data to Google Analytics
 *
 * SEO Considerations:
 * - Meta tags for description, keywords, and social media sharing
 * - Proper heading structure (h1, h2) for content hierarchy
 *
 * Styling:
 * - Utilizes CSS modules for scoped styling (Home.css)
 * - Implements dark and light background sections for visual contrast
 */

import React from 'react'
import './css/Home.css'
import LinkButton from '../components/LinkButton'
import ScrollReveal from '../components/ScrollReveal'
import { bg_image_4, backendUrl } from '../Datasets/data'
import IndustriesSection from '../components/IndustriesSection'
import ScrollToScale from '../components/ScrollToScale'
import MovingGradient from '../components/MovingGradient'
import LazyLoad from 'react-lazyload'
import FormBold from '../components/FormBold'
import ReactGA from 'react-ga4'
import { Helmet } from 'react-helmet'

const AdvTextImage = React.lazy(() => import('../components/AdvTextImage'))
const TeamCompanies = React.lazy(() => import('../components/TeamCompanies'))

function Home() {
  ReactGA.send({
    hitType: 'pageview',
    page: '/',
    title: 'Octtoppus - From Insight To Impact',
  })

  return (
    <div className="home-page-contanier">
      <Helmet>
        <title>Octtoppus | Business Consultancy and Digital Solutions</title>
        <meta
          name="description"
          content="Octtoppus provides expert business consultancy, digital solutions, and AI-driven services. Boost your business with our tailored solutions and innovative strategies."
        />
        <meta
          name="keywords"
          content="business consultancy, digital solutions, AI services, social media management, web development, corporate training"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Octtoppus" />
        <meta
          property="og:title"
          content="Octtoppus | Business Consultancy and Digital Solutions"
        />
        <meta
          property="og:description"
          content="Expert business consultancy, digital solutions, and AI-driven services to elevate your business."
        />
        <meta
          property="og:image"
          content="https://www.octtoppus.com/images/logos/octtoppus.png"
        />
        <meta property="og:url" content="https://www.octtoppus.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Octtoppus | Business Consultancy and Digital Solutions"
        />
        <meta
          name="twitter:description"
          content="Boost your business with expert consultancy and digital solutions from Octtoppus."
        />
        <meta
          name="twitter:image"
          content="https://www.octtoppus.com/images/logos/octtoppus.png"
        />
      </Helmet>
      <div className="dark-background">
        <div className="S-Hero-section">
          <video autoPlay loop muted playsInline>
            <source src={backendUrl + 'videos/services.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="Hero-section-left-container">
            <h1>
              The <MovingGradient>Octtoppus</MovingGradient> Way
            </h1>
            <p>Where tech innovation meets strategic vision</p>
          </div>
        </div>
        <div className="about-container">
          <div className="about-left-section">
            <ScrollReveal revealThreshold={350}>
              <h2>Our Mission</h2>
            </ScrollReveal>
            <ScrollReveal delay={300} revealThreshold={250}>
              <p>
                At Octtoppus, we empower businesses with tailored solutions,
                driving growth and enhancing control through collaborative
                partnerships. Our commitment to sustainability fosters long-term
                success while harnessing technology and data insights elevates
                brand value and resonates with audiences. Together, we shape a
                brighter future for businesses worldwide.
              </p>
            </ScrollReveal>
            <ScrollToScale initialScale={0} finalScale={1} delay={300}>
              <div>
                <LinkButton ButtonText="Dive in" ButtonLink="/services" />
              </div>
            </ScrollToScale>
          </div>
          <div className="about-right-section">
            <div className="about-image-container">
              <LazyLoad offset={100} height={500}>
                <video autoPlay loop muted playsInline>
                  <source
                    src={process.env.PUBLIC_URL + 'videos/Hub.mp4'}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </LazyLoad>
            </div>
          </div>
        </div>
        {/* <SlideShow /> */}
        <div className="industries-component-container">
          <h2 className="industries-heading">Industries we serve</h2>
          <IndustriesSection />
        </div>
      </div>
      <AdvTextImage
        heading={'Our Vision'}
        paragraph={
          'In an innovative ecosystem, businesses thrive. We pioneer change, shaping the digital landscape with new approaches. We aim to be the top choice for global enterprises, empowering their potential. We aim to revolutionise the industries by embracing new technologies, further bolstering change and sustainability. We pave the way for a brighter future through strategic partnerships.'
        }
        image={bg_image_4}
        shadow={false}
      />
      <div className="secondary-dark-background">
        <TeamCompanies />
        <FormBold />
      </div>
    </div>
  )
}

export default Home
