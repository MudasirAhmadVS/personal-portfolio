import Box from '@mui/material/Box';
import ProfileCard from '../profile-card';
import BackgroundBG from './../../assets/images/hero-bg.png';
import BackgroundDotsBG from './../../assets/images/hero-bg2.png';


const HeroSection = (props) => {
    return (
        <Box sx={{
            position: 'relative',
            pt: { xs: '0rem', md: '4rem' },
            pb: { xs: '3rem', md: '4rem' },
            px: { xs: '4rem', md: 0 },
            overflowX: 'clip'
        }}>
            <Box component='span' sx={{
                position: 'absolute',
                top: '-100px',
                right: { xs: '-100px', md: '0px' },
                zIndex: '-10'
            }}>
                <Box component='img'
                    src={BackgroundBG}
                    sx={{
                        width: '100%',
                        height: 'auto'
                    }}>
                </Box>
            </Box>
            <Box component='span' sx={{
                position: 'absolute',
                top: '60px',
                left: '60px',
                zIndex: '-10'
            }}>
                <Box component='img'
                    src={BackgroundDotsBG}
                    sx={{
                        width: '75%',
                        height: 'auto'
                    }}>
                </Box>
            </Box>
            <ProfileCard></ProfileCard>
        </Box>
    )
}

export default HeroSection;