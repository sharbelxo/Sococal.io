import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import logoBETA from './assets/logoBETA.png'

export default function Login() {

    const [code, setCode] = React.useState('');

    const verify = () => {
        if (code === 'makemyday') {
            localStorage.setItem('access', 'true');
            window.location.href = '/';
        } else {
            alert('Incorrect Access Code');
        }
    }

    return (
        <>
            <Grid container style={{ maxHeight: '15vh' }}></Grid>
            <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '40vh' }}>
                <img item style={{ width: 300, height: 50 }} src={logoBETA} alt="Sococal Logo" />
            </Grid>

            <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '20vh' }} direction={'column'}>
                <Typography item fontSize={50} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                    Enter Access Code
                </Typography>
                <Typography item fontSize={30} component="div" gutterBottom sx={{ display: { xs: 'block', md: 'none' } }}>
                    Enter Access Code
                </Typography>
                <br />
                <TextField item id="code" label="Access Code" variant="outlined" value={code} onChange={(event) => { setCode(event.target.value) }} />
                <br />
                <Button item variant="contained" color="primary" onClick={verify}>Submit</Button>
            </Grid>
        </>

    )
}
