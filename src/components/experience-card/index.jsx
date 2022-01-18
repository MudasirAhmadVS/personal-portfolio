import { Paper, List, Typography, Box } from "@mui/material";
import Experience from "./Experience";
const ExperienceCard = () => {
    return (
        <Box >
            <Typography
                sx={{
                    mb: 6,
                    fontSize: '50px',
                    fontWeight: 700,
                    fontFamily: 'Roboto',
                    textAlign: 'center'
                }} variant='h1'>My Experience</Typography>

            <Paper elevation={16} sx={{
                borderRadius: '30px',
                py: 6,
                px: 10
            }}>
                <Experience styleOne
                    company='Softserve' primaryText='Senior - Front-End Developer' secondaryText='may 2019 - march 2021'></Experience>

                <Experience company='Softserve' text='Simply random text. It has roots in
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Contrary to popular belief,'></Experience>
                <Experience company='Softserve' text='Simply random text. It has roots in
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Contrary to popular belief,'></Experience>

            </Paper>
        </Box>

    )
}

export default ExperienceCard;