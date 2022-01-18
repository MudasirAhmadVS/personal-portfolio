import { Fab, Box } from "@mui/material";
import UpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {

    const handleClick = () => {
        window['scrollTo']({ top: 0, behavior: 'smooth' });
    }

    return (
        <Box component='span' sx={{
            position: 'absolute',
            right: '5rem',
            bottom: 0
        }}>
            <Fab size="medium" sx={{
                color: '#3036C3',
                boxShadow: 'none',
                border: 1,
                backgroundColor: 'transparent'
            }} onClick={handleClick}>
                <UpIcon />
            </Fab>
        </Box>
    )
}

export default ScrollToTop;