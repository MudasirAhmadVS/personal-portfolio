import { Typography, Box, Grid } from '@mui/material';
import PrimaryButton from '../layout/PrimaryButton';
import ProfileImage from './../../assets/images/about-img.png';
import Specialities from './Specialities';

const CardInfo = () => {
    return (
        <Grid container >
            <Grid item md={6}>
                <Box component='img' sx={{
                    width: '400px',
                    height: 'auto',
                }}
                    src={ProfileImage}
                    alt="Profile Image">
                </Box>
            </Grid>
            <Grid item md={6} sx={{
                pt: { xs: 0, md: 8 },
                pb: 8
            }}>
                <Box component='span' >
                    <Typography
                        sx={{
                            mb: 2,
                            fontSize: '20px',
                            fontWeight: '700',
                            fontFamily: 'Open Sans'
                        }} variant='h6'>A bit</Typography>

                    <Typography
                        sx={{
                            mb: 3,
                            fontSize: '70px',
                            fontWeight: 700,
                            fontFamily: 'Roboto'
                        }} variant='h1'>About Me</Typography>

                    <Typography sx={{
                        color: '#00000080',
                        fontFamily: 'Open Sans'
                    }} variant='body2'>
                        Simply random text. It has roots in
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from  roots in a piece of classical Latin literature from
                        2000 years old. Richard Contrary to popular belief, Lorem Ipsum is not simply random text.  </Typography>
                </Box>
            </Grid>

            <Grid item md={7} ml='auto'>
                <Specialities></Specialities>
            </Grid>
        </Grid>
    )
}

export default CardInfo;