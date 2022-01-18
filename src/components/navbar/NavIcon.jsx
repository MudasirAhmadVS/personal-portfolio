import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";

const NavIcon = (props) => {
    return (
        <ListItem sx={{
            padding: 1
        }}>
            <IconButton
                sx={{
                    border: 1,
                    color: { xs: '#3036C3', md: '#ffffff' }
                }}
            >{props.children}</IconButton>
        </ListItem>
    )
}

export default NavIcon;