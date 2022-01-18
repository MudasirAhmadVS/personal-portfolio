import ExperienceSection from './../components/experience-section';
import HeroSection from './../components/hero-section';
import AboutSection from './../components/about-section';
import PortfolioSection from './../components/portfolio-section';
import ContactSection from './../components/contact-section';
import Navbar from './../components/navbar';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <ExperienceSection></ExperienceSection>
            <PortfolioSection></PortfolioSection>
            <ContactSection></ContactSection>
        </>
    )
}

export default Home;