import { Box, TextField, Grid } from '@mui/material';
import PrimaryButton from './../layout/PrimaryButton';

const ContactForm = () => {
    return (
        <Box>
            <Box component='form' autoComplete='off'>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth id='name' variant='standard' label='Enter Name'></TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField fullWidth id='surname' variant='standard' label='Enter Surname'></TextField>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField fullWidth id='email' variant='standard' label='Enter Email'></TextField>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField fullWidth id='message' variant='standard' multiline rows={4} label='Write Your Message'></TextField>
                    </Grid>
                    <Grid item xs={12} md={12} sx={{
                        textAlign: { xs: 'start', md: 'end' }
                    }}>
                        <PrimaryButton text='Send Message'></PrimaryButton>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default ContactForm;