import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainHeader from './header/Header';
import { APIURL } from './Datasets/data';
import { startTransition } from 'react';
import Loading from './components/Loading';
// import ComingSoon from './components/ComingSoon';

// Lazy-loaded components
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Enterprise = React.lazy(() => import('./pages/Enterprise'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Page404 = React.lazy(() => import('./pages/Page404'));
const OcttoppusFooter = React.lazy(() => import('./footer/OcttoppusFooter'));
const ContactForm = React.lazy(() => import('./pages/ContactForm'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function OcttoppusRouting() {
  const [blogposts, setBlogposts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogResponse] = await Promise.all([
          fetch(APIURL + 'blogs_links.php'),
        ]);

        const [blogData] = await Promise.all([
          blogResponse.json(),
        ]);

        // Wrap state updates with startTransition
        startTransition(() => {
          setBlogposts(blogData);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if(loading){
    return <Loading />
  }

  return (
    <Router>
      <Suspense>
        <ScrollToTop />
        <MainHeader />
        <AnimatePresence exitBeforeEnter={false} initial={false}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/expertise" element={<Enterprise />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/contact-form" element={<ContactForm />} />
            {blogposts.map((post) => (
              <Route
                key={post.id}
                path={`/blog/${post.title_link}`}
                element={<BlogPost postuid={post.id} />}
              />
            ))}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </AnimatePresence>
        <OcttoppusFooter />
      </Suspense>
    </Router>
  );
}

export default OcttoppusRouting;
