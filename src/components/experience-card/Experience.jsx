import { List, ListItem, ListItemIcon, ListItemText, Typography, Grid, Box } from "@mui/material";
import DotIcon from '@mui/icons-material/Circle';


const Experience = (props) => {
    return (
        < Box sx={{ alignItems: 'baseline' }
        }>
            <Grid container>
                <Grid item md={3}>
                    <Typography variant='h6' fontWeight={400} sx={{ textTransform: 'uppercase' }}>{props.company}</Typography>
                </Grid>

                <Grid item md={9} mb={2}>
                    <List disablePadding>
                        <ListItem sx={{ alignItems: 'baseline' }} disablePadding>
                            <ListItemIcon sx={{ minWidth: '30px' }}>
                                <DotIcon sx={{
                                    color: '#3036C3',
                                    fontSize: '14px'
                                }}></DotIcon>
                            </ListItemIcon>
                            {
                                props.styleOne && <ListItemText sx={{ margin: '0px' }}
                                    primary={
                                        <Typography variant='h6'
                                            sx={{
                                                fontWeight: '700'
                                            }}>{props.primaryText}</Typography>}
                                    secondary={
                                        <Typography variant="h6">{props.secondaryText}</Typography>
                                    }
                                >
                                </ListItemText>
                            }
                            {!props.styleOne && <ListItemText>
                                {props.text}
                            </ListItemText>}
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Experience;