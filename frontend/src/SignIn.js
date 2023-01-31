import { React, useState, useEffect } from 'react';
import { Button, Card, CardContent, Grid, Link, TextField } from '@mui/material';

import './SignUp.css'
import logoBETA from './assets/logoBETA.png'

import { supabase } from './supabaseClient';

// import axios from 'axios';

export default function SignIn() {

    // useEffect(() => {
    //     axios.get('http://localhost:8000/instagram/sococalai')
    //         .then(response => {
    //             console.log(response.data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, []);

    const styles = {
        card: {
            maxWidth: 400,
            margin: 'auto',
            textAlign: 'center',
            marginTop: 50,
            // paddingBottom: 50,
        },
        error: {
            verticalAlign: 'middle',
        },
        title: {
            marginTop: 50,
            color: '#757575',
            textAlign: 'center',
        },
        textField: {
            marginLeft: 30,
            marginRight: 30,
            width: 300,
        },
        submit: {
            margin: 'auto',
            marginBottom: 20,
            backgroundColor: '#7184a8',
        },
        link: {
            color: 'blue',
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline'
            }
        }
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {

        console.log(email, password);

        const values = {
            email: email,
            password: password
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: values
        }

        console.log(requestOptions.body);

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            });
            if (error) throw error;
            // alert('Signed in successfully!');
            localStorage.setItem('access', 'true');
            window.location.href = '/';
        } catch (error) {
            alert(error.error_description || error.message);
        }
    }

    return (
        <div className='root'>
            <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}></Grid>
            <Card style={styles.card}>
                <CardContent>
                    <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
                        <img item style={{ width: 300, height: 50 }} src={logoBETA} alt="Sococal Logo" />
                    </Grid>
                    {/* eslint-disable-next-line*/}
                    <form action="javascript:myFunction(); return false;" onSubmit={() => {
                        handleSubmit();
                    }}>
                        <h1 style={styles.title}>Sign In</h1>
                        <TextField required style={styles.textField} id="email" type="email" label="Email" value={email} onChange={(event) => { setEmail(event.target.value) }} margin="normal" />
                        <br />
                        <TextField required style={styles.textField} id="password" type="password" label="Password" value={password} onChange={(event) => { setPassword(event.target.value) }} margin="normal" />
                        <br />
                        <br />
                        <Button type="submit" variant="contained" style={styles.submit}>Sign In</Button>
                        <br />
                    </form>
                    <p>Don't have an account? <Link href='/SignUp' underline="none" color="Blue">Click Here</Link>  to Sign Up.</p>
                </CardContent>
            </Card>
        </div>
    );
}