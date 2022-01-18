import { Typography, Box, Grid } from '@mui/material';
import PrimaryButton from '../layout/PrimaryButton'
import ProfileImage from './../../assets/images/profile-image.png';

const CardText = () => {
    return (
        <Grid container >
            <Grid item md={6} paddingY={11}>
                <Box component='span' >
                    <Typography
                        sx={{
                            mb: 3,
                            fontSize: '20px',
                            fontWeight: '700',
                            fontFamily: 'Open Sans'
                        }} variant='h6'>Hi, my name is</Typography>

                    <Typography
                        sx={{
                            mb: 3,
                            fontSize: '72px',
                            fontWeight: 700,
                            fontFamily: 'Roboto'
                        }} variant='h1'>Lorem Ipsum</Typography>

                    <Typography sx={{
                        mb: 3,
                        color: '#00000080',
                        fontFamily: 'Open Sans'
                    }} variant='body2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has be </Typography>
                    <PrimaryButton text="My Story"></PrimaryButton>
                </Box>
            </Grid>

            <Grid item md={6}>
                <Box component='img' sx={{
                    width: '450px',
                    height: 'auto',
                }}
                    src={ProfileImage}
                    alt="Profile Image">
                </Box>
            </Grid>
        </Grid>
    )
}

export default CardText;