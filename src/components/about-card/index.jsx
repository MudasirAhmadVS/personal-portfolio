import CardInfo from "./CardInfo";
import { Box, Grid } from '@mui/material';

const AboutCard = () => {
    return (
        <Grid container>
            <Grid item md={9} mx='auto'>
                <CardInfo></CardInfo>
            </Grid>
        </Grid>
    )
}

export default AboutCard;