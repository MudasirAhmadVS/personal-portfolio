import { Grid, Box, Typography, Link } from '@mui/material';

import LinkIcon from '@mui/icons-material/IosShareRounded';

const PortfolioCard = (props) => {
    return (
        <Grid container spacing={6}>
            {!props.flipContent && <Grid item md={6}>
                <Box component='img'
                    src={props.image}
                    sx={{ width: '100%' }}>
                </Box>
            </Grid>}

            <Grid item md={6}
                sx={{
                    mt: { xs: 0, md: 7 },
                    mb: { xs: 3 }
                }}
                order={{ xs: 2, md: 1 }}>
                <Grid container mb={2}>
                    <Grid item md={9}>
                        <Typography variant='h4' sx={{
                            color: '#ffffff',
                            fontWeight: '700'
                        }}>Lorem Ipsum Websight Projekt</Typography>
                    </Grid>
                    <Grid item md={3}>
                        <Link href="#" underline="none">
                            <LinkIcon sx={{
                                color: '#ffffff',
                                fontSize: '30px'
                            }}></LinkIcon>
                        </Link>
                    </Grid>
                </Grid>
                <Typography variant='body2'
                    sx={{
                        backgroundColor: '#23288B',
                        color: '#ffffff',
                        marginBottom: '20px',
                        padding: 1
                    }}>Simply random text. It has roots in
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 </Typography>

                <Typography variant='body2'
                    sx={{
                        color: '#ffffff',
                    }}>Simply random text. It has roots in
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 </Typography>
            </Grid>

            {props.flipContent && <Grid item md={6} order={{ xs: 1 }}>
                <Box component='img'
                    src={props.image}
                    sx={{ width: '100%' }}>
                </Box>
            </Grid>}
        </Grid >
    )
}

export default PortfolioCard;