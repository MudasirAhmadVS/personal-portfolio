import List from "@mui/material/List";
import NavIcon from "./NavIcon";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkinIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const NavIcons = () => {
    return (
        <List sx={{
            display: 'flex',
            flexDirection: 'row',
            ml: 'auto'
        }}>
            <NavIcon><GitHubIcon fontSize="small" /></NavIcon>
            <NavIcon><LinkinIcon fontSize="small" /></NavIcon>
            <NavIcon><InstagramIcon fontSize="small" /></NavIcon>
            <NavIcon><TwitterIcon fontSize="small" /></NavIcon>
            <NavIcon><FacebookIcon fontSize="small" /></NavIcon>
        </List>
    )
}

export default NavIcons;