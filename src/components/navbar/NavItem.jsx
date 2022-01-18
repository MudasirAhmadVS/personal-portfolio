import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';

const NavItem = (props) => {
    return (
        <ListItem sx={{
            display: "inline"
        }}>
            <Link
                sx={{
                    color: "#444444",
                    fontSize: "18px",
                    fontWeight: "500",
                    fontFamily: 'Open Sans',
                    whiteSpace: 'nowrap'
                }}
                underline='none'
                href="#">{props.text}</Link>
        </ListItem>
    )
}

export default NavItem;