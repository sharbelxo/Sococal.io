import React, { useEffect } from 'react';

import { Grid, Typography, Box } from '@mui/material';

import AppFooter from './components/AppFooter';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Generator from './components/Generator';

export default function Home() {

    useEffect(() => {
        if (localStorage.getItem('access') === 'false') {
            window.location.href = '/login';
        } else {
            localStorage.setItem('access', 'false');
        }
    }, [])

    return (
        <>
            <ResponsiveAppBar />
            <br />
            <Grid container alignItems="center" justifyContent="center">
                <Box sx={{ height: 100, width: 1500, display: { xs: 'none', md: 'block' } }} >
                    <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '40vh' }} direction={'column'}>
                        <br />
                        <Typography component="div" gutterBottom>
                            <Generator />
                        </Typography>
                    </Grid>
                    <AppFooter />
                </Box >
            </Grid>
            <Grid container alignItems="center" justifyContent="center">
                <Box sx={{ height: 100, width: 1500, display: { xs: 'block', md: 'none' } }} >
                    <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '40vh' }} direction={'column'}>
                        <Typography component="div" gutterBottom>
                            <Generator />
                        </Typography>
                    </Grid>
                    <AppFooter />
                </Box >
            </Grid>
        </>
    )
}