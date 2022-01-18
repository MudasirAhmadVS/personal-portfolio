
import Box from '@mui/material/Box';
import AboutBG from './../../assets/images/about-bg.png';
import AboutCard from '../about-card';

const AboutSection = (props) => {
    return (
        <Box sx={{
            position: 'relative',
            mb: '8rem',
            px: { xs: '4rem', md: 0 }
        }}>
            <Box component='span' sx={{
                position: 'absolute',
                top: '20px',
                left: '0',
                zIndex: '-10',
            }}>
                <Box component='img'
                    sx={{
                        width: '75%',
                        height: 'auto'
                    }}
                    src={AboutBG}>
                </Box>
            </Box>
            <AboutCard></AboutCard>
        </Box>
    )
}

export default AboutSection;