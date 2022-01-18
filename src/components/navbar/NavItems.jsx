import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import NavItem from "./NavItem";
import NavButton from "./NavButton";

const NavItems = () => {
    return (
        <List sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
            <NavItem text="About Me"></NavItem>
            <NavItem text="My Experience"></NavItem>
            <NavItem text="Portfolio"></NavItem>
            <NavItem text="Contact Me"></NavItem>
            <ListItem sx={{ display: "inline" }}>
                <NavButton></NavButton>
            </ListItem>
        </List>
    )
}

export default NavItems;