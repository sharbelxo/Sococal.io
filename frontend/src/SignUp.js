import { React, useState } from 'react';
import { Button, Card, CardContent, Grid, Link, TextField } from '@mui/material';

import './SignUp.css'
import logoBETA from './assets/logoBETA.png'

import { supabase } from './supabaseClient';

export default function SignUp() {

    const styles = {
        card: {
            maxWidth: 400,
            margin: 'auto',
            textAlign: 'center',
            marginTop: 50,
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

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {

        console.log(firstName, lastName, email, password);

        const values = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: values
        };

        console.log(requestOptions.body);

        try {
            const { error } = await supabase.auth.signUp({
                email: email,
                password: password
            });
            if (error) throw error;
            alert('You have successfully signed up!');
            window.location.href = '/login';
            // history.push('/login');
        } catch (error) {
            alert(error.error_description || error.message);
        }

    }

    return (
        <div className='root'>
            <Card style={styles.card}>
                <CardContent>
                    <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
                        <img item style={{ width: 300, height: 50 }} src={logoBETA} alt="Sococal Logo" />
                    </Grid>
                    <h1 style={styles.title}>Sign Up</h1>
                    {/* eslint-disable-next-line*/}
                    <form action="javascript:myFunction(); return false;" onSubmit={() => {
                        handleSubmit();
                    }}>
                        <TextField required style={styles.textField} id="firstName" label="First Name" value={firstName} onChange={(event) => { setFirstName(event.target.value) }} margin="normal" />
                        <br />
                        <TextField required style={styles.textField} id="lastName" label="Last Name" value={lastName} onChange={(event) => { setLastName(event.target.value) }} margin="normal" />
                        <br />
                        <TextField required style={styles.textField} id="email" type="email" label="Email" value={email} onChange={(event) => { setEmail(event.target.value) }} margin="normal" />
                        <br />
                        <TextField required style={styles.textField} id="password" type="password" label="Password" value={password} onChange={(event) => { setPassword(event.target.value) }} margin="normal" />
                        <br />
                        <br />
                        <Button type="submit" variant="contained" style={styles.submit}>Sign Up</Button>
                        <br />
                    </form>
                    <p>Already have an account? <Link href='/Login' underline="none" color="Blue">Click Here</Link>  to log in.</p>
                </CardContent>
            </Card>
        </div>
    );
}