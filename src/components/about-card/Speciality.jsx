import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DotIcon from '@mui/icons-material/Circle'

const Speciality = (props) => {
    return (
        <ListItem sx={{
            width: '25%',
            py: 0
        }}>
            <ListItemIcon sx={{
                minWidth: '14px'
            }}>
                <DotIcon sx={{
                    color: 'black',
                    fontSize: '6px'
                }}></DotIcon>
            </ListItemIcon>
            <ListItemText sx={{
                fontSize: '24px',
                fontWeight: 600,
                whiteSpace: 'nowrap',
            }}>{props.children}</ListItemText>
        </ListItem>
    )
}

export default Speciality;