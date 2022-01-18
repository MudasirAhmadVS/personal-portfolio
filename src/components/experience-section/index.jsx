import ExperienceBG from './../../assets/images/experience-bg.png';
import ExperienceCard from "../experience-card";
import BackgroundDotsBG from './../../assets/images/hero-bg2.png';
import { Box, Grid } from '@mui/material';

const ExperienceSection = () => {
    return (
        <Box sx={{
            position: 'relative',
            px: { xs: '2rem' }
        }}>
            <Box component='span' sx={{
                position: 'absolute',
                top: '-20px',
                left: '10px',
                zIndex: '-10'
            }}>
                <Box component='img'
                    src={BackgroundDotsBG}
                    sx={{
                        width: '100%',
                        height: 'auto'
                    }}>
                </Box>
            </Box>
            <Box sx={{ zIndex: '10' }}>
                <Grid container >
                    <Grid item md={8} mx='auto'>
                        <ExperienceCard></ExperienceCard>
                    </Grid>
                </Grid>
            </Box>
        </Box >

    )
}

export default ExperienceSection;