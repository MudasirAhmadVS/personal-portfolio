import { Box, Grid, Typography } from '@mui/material';
import PrimaryButton from './../layout/PrimaryButton'
import ProfileImage from './../../assets/images/profile-image.png';

const ProfileCard = () => {
    return (
        <Grid container>
            <Grid item md={9} mx='auto'>
                <Grid container >
                    <Grid item md={6}
                        sx={{
                            pt: { xs: 0, md: 8 },
                            pb: 8
                        }}
                        order={{ xs: 2, md: 1 }}>
                        <Box component='span'>
                            <Typography
                                sx={{
                                    mb: 3,
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    fontFamily: 'Open Sans',
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

                    <Grid item md={6}
                        order={{ xs: 1, md: 2 }}>
                        <Box component='img' sx={{
                            width: '400px',
                            height: 'auto',
                        }}
                            src={ProfileImage}
                            alt="Profile Image">
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProfileCard;