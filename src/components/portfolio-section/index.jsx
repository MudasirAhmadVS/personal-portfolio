import { Typography, Box, Container } from "@mui/material";
import PortfolioOne from './../../assets/images/portfolio-one.png';
import PortfolioTwo from './../../assets/images/portfolio-two.png';
import PortfolioThree from './../../assets/images/portfolio-three.png';
import PortfolioFour from './../../assets/images/portfolio-four.png';
import PortfolioCard from "../portfolio-card";

const PortfolioSection = () => {
    return (
        <Box sx={{
            backgroundColor: '#3036C3',
            pt: '10rem',
            pb: '3rem',
            position: 'relative',
            top: '-6rem',
            zIndex: '-10',
            px: { xs: '2rem' }
        }}>
            <Container maxWidth='md'>
                <Typography variant='h1' sx={{
                    fontSize: '50px',
                    fontWeight: '700',
                    color: '#ffffff'
                }}>Portfolio</Typography>
                <PortfolioCard image={PortfolioOne}></PortfolioCard>
                <PortfolioCard image={PortfolioTwo} flipContent></PortfolioCard>
                <PortfolioCard image={PortfolioThree}></PortfolioCard>
                <PortfolioCard image={PortfolioFour} flipContent></PortfolioCard>
            </Container>
        </Box>
    )
}

export default PortfolioSection;