import { Button } from "@mui/material";
import { useTheme } from "@mui/material";

const PrimaryButton = (props) => {
    const theme = useTheme();
    return (
        <Button
            sx={{
                borderColor: theme.palette.primary,
                backgroundColor: theme.palette.main.primary,
                borderRadius: '50px',
                fontFamily: 'Open Sans',
                textTransform: 'capitalize',
                padding: '8px 32px'
            }}
            variant="contained" disableElevation>{props.text}</Button>
    )
}

export default PrimaryButton;