import { Box, Container, Grid, Link, Stack } from '@mui/material';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LoginIcon from '@mui/icons-material/Login';
import CelebrationIcon from '@mui/icons-material/Celebration';

export default function AppFooter() {
    return (
        <footer>
            <Box px={{ xs: 3, sm: 8 }}
                py={{ xs: 5, sm: 4 }}
                sx={{ bgcolor: '#708090' }} color="white">
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>About</Box>
                            <Box>
                                <br />
                                <Stack direction="row" alignItems="center" gap={1}>

                                    <Link href="https://sococal.com/" target="_blank" underline="none" color="white">Home</Link>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Join Us</Box>
                            <Box>
                                <br />
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <CelebrationIcon />
                                    <Link href="https://sococal.com/account/register" target="_blank" underline="none" color="white"> Sign Up</Link>
                                </Stack>
                            </Box>
                            <Box>
                                <br />
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <LoginIcon />
                                    <Link href="https://sococal.com/account/login" target="_blank" underline="none" color="white"> Login</Link>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Follow Us</Box>
                            <Box>
                                <br />
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <InstagramIcon />
                                    <Link href="https://www.instagram.com/sococalai/" target="_blank" underline="none" color="white">sococalai</Link>
                                </Stack>
                            </Box>
                            <Box>
                                <br />
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <TwitterIcon />
                                    <Link href="https://twitter.com/sococalai" target="_blank" underline="none" color="white">sococalai</Link>
                                </Stack>
                            </Box>
                            <Box>
                                <br />
                                <Stack direction="row" alignItems="center" gap={1}>
                                    <FacebookIcon />
                                    <Link href="" target="_blank" underline="none" color="white">sococalai</Link>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }}  >
                        Copyright &copy; 2023 Sococal - All Rights Reserved.
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}
