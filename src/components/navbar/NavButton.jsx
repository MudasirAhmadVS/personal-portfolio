import Button from "@mui/material/Button";

const NavButton = () => {
    return (
        <Button sx={{
            borderRadius: "50px",
            color: "#444444",
            fontFamily: 'Open Sans',
            fontSize: "17px",
            textTransform: "none",
            fontWeight: "600",
            borderColor: "#3036C3",
            padding: "2px 22px"
        }}
            variant="outlined"
        >Resume</Button>
    )
}

export default NavButton;