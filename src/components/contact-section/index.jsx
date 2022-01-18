import ContactForm from "./ContactForm";
import { Box, Container, Typography, Grid } from "@mui/material";
import ScrollToTop from './../scroll-to-top';

const ContactSection = () => {
    return (
        <Box sx={{
            position: 'relative',
            mt: 6,
            mb: 8,
            px: { xs: '4rem' }
        }}>
            <Grid container>
                <Grid item md={6} sx={{ mx: 'auto' }}>
                    <Typography variant='h1' sx={{
                        fontSize: '50px',
                        fontWeight: '700',
                    }}>Get In Touch</Typography>
                    <ContactForm></ContactForm>
                </Grid>
            </Grid>
            <ScrollToTop></ScrollToTop>
        </Box>
    )
}

export default ContactSection;