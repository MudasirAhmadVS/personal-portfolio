import { Typography, Box, List, ListItem } from "@mui/material";
import Speciality from "./Speciality";

const specialities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Specialities = () => {
    return (
        <Box>
            <Typography variant='h5' sx={{ fontWeight: '700' }}>My Specialities</Typography>
            <List sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {specialities.map((item) => <Speciality key={item}>Acruent {item}</Speciality>)}
            </List>
        </Box>
    )
}

export default Specialities;