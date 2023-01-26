import { Button, Divider, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import OutlinedCard from './OutlinedCard';

const { Configuration, OpenAIApi } = require("openai");

export default function Generator() {

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const [responses, setResponses] = useState([[], [], [], [], [], [], []]);

    const getContent = async () => {

        setEmpty(true)
        let result = [[], [], [], [], [], [], []];
        try {
            const contentIdea = await Promise.all([
                openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Create for me a picture idea for my brand that sells product: " + product + " with two sentences.",
                    temperature: 1,
                    max_tokens: 300,
                    top_p: 1,
                    frequency_penalty: 0.7,
                    presence_penalty: 0.8,
                }).then((res) => {
                    return res.data.choices[0].text;
                }),
                openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Create for me a picture idea for my brand that talks about: " + brandDescription + " with two sentences.",
                    temperature: 1,
                    max_tokens: 300,
                    top_p: 1,
                    frequency_penalty: 0.7,
                    presence_penalty: 0.8,
                }).then((res) => {
                    return res.data.choices[0].text;
                }),
                openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Create for me a picture idea for my brand that talks about: " + focus + " with two sentences.",
                    temperature: 1,
                    max_tokens: 300,
                    top_p: 1,
                    frequency_penalty: 0.7,
                    presence_penalty: 0.8,
                }).then((res) => {
                    return res.data.choices[0].text;
                }),
                openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Create for me a picture idea for my brand that talks about: " + product + " with two sentences.",
                    temperature: 1,
                    max_tokens: 300,
                    top_p: 1,
                    frequency_penalty: 0.7,
                    presence_penalty: 0.8,
                }).then((res) => {
                    return res.data.choices[0].text;
                }),
                openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Create for me a picture idea for my brand that talks about: " + focus + " with two sentences.",
                    temperature: 1,
                    max_tokens: 300,
                    top_p: 1,
                    frequency_penalty: 0.7,
                    presence_penalty: 0.8,
                }).then((res) => {
                    return res.data.choices[0].text;
                }),
                openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Create for me a picture idea for my brand that talks about: " + brandDescription + " with two sentences.",
                    temperature: 1,
                    max_tokens: 300,
                    top_p: 1,
                    frequency_penalty: 0.7,
                    presence_penalty: 0.8,
                }).then((res) => {
                    return res.data.choices[0].text;
                }),
                openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Create for me a picture idea for my brand that talks about: " + product + " with two sentences.",
                    temperature: 1,
                    max_tokens: 300,
                    top_p: 1,
                    frequency_penalty: 0.7,
                    presence_penalty: 0.8,
                }).then((res) => {
                    return res.data.choices[0].text;
                }),
            ]);

            const caption = await Promise.all([
                openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Create a " + socialMediaPlatform + " caption for the following post idea:" + contentIdea[0] + "the voice tone of the caption should be " + voiceTone + ", we are promoting:" + promotion + ", call to action: " + destination + ". Ideal Customer is: " + idealCustomer + " that has the following interests: " + idealCustomerInterests + " and include 5 hashtags, no quotations in your answer and add some emojis if needed.",
                    temperature: 1,
                    max_tokens: 150,
                    top_p: 1,
                    frequency_penalty: 0.8,
                    presence_penalty: 0.8,
                }).then((res) => {
                    return res.data.choices[0].text;
                }),
                openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Create a " + socialMediaPlatform + " caption for the following post idea:" + contentIdea[1] + "the voice tone of the caption should be " + voiceTone + ", we are promoting:" + promotion + ", call to action: " + destination + ". Ideal Customer is: " + idealCustomer + " that has the following interests: " + idealCustomerInterests + " and include 5 hashtags, no quotations in your answer and add some emojis if needed.",
                    temperature: 1,
                    max_tokens: 150,
                    top_p: 1,
                    frequency_penalty: 0.8,
                    presence_penalty: 0.8,
                }).then((res) => {
                    return res.data.choices[0].text;
                }),
                openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Create a " + socialMediaPlatform + " caption for the following post idea:" + contentIdea[2] + "the voice tone of the caption should be " + voiceTone + ", we are promoting:" + promotion + ", call to action: " + destination + ". Ideal Customer is: " + idealCustomer + " that has the following interests: " + idealCustomerInterests + " and include 5 hashtags, no quotations in your answer and add some emojis if needed.",
                    temperature: 1,
                    max_tokens: 150,
                    top_p: 1,
                    frequency_penalty: 0.8,
                    presence_penalty: 0.8,
                }).then((res) => {
                    return res.data.choices[0].text;
                }),
                openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Create a " + socialMediaPlatform + " caption for the following post idea:" + contentIdea[3] + "the voice tone of the caption should be " + voiceTone + ", we are promoting:" + promotion + ", call to action: " + destination + ". Ideal Customer is: " + idealCustomer + " that has the following interests: " + idealCustomerInterests + " and include 5 hashtags, no quotations in your answer and add some emojis if needed.",
                    temperature: 1,
                    max_tokens: 150,
                    top_p: 1,
                    frequency_penalty: 0.8,
                    presence_penalty: 0.8,
                }).then((res) => {
                    return res.data.choices[0].text;
                }),
                openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Create a " + socialMediaPlatform + " caption for the following post idea:" + contentIdea[4] + "the voice tone of the caption should be " + voiceTone + ", we are promoting:" + promotion + ", call to action: " + destination + ". Ideal Customer is: " + idealCustomer + " that has the following interests: " + idealCustomerInterests + " and include 5 hashtags, no quotations in your answer and add some emojis if needed.",
                    temperature: 1,
                    max_tokens: 150,
                    top_p: 1,
                    frequency_penalty: 0.8,
                    presence_penalty: 0.8,
                }).then((res) => {
                    return res.data.choices[0].text;
                }),
                openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Create a " + socialMediaPlatform + " caption for the following post idea:" + contentIdea[5] + "the voice tone of the caption should be " + voiceTone + ", we are promoting:" + promotion + ", call to action: " + destination + ". Ideal Customer is: " + idealCustomer + " that has the following interests: " + idealCustomerInterests + " and include 5 hashtags, no quotations in your answer and add some emojis if needed.",
                    temperature: 1,
                    max_tokens: 150,
                    top_p: 1,
                    frequency_penalty: 0.8,
                    presence_penalty: 0.8,
                }).then((res) => {
                    return res.data.choices[0].text;
                }),
                openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Create a " + socialMediaPlatform + " caption for the following post idea:" + contentIdea[6] + "the voice tone of the caption should be " + voiceTone + ", we are promoting:" + promotion + ", call to action: " + destination + ". Ideal Customer is: " + idealCustomer + " that has the following interests: " + idealCustomerInterests + " and include 5 hashtags, no quotations in your answer and add some emojis if needed.",
                    temperature: 1,
                    max_tokens: 150,
                    top_p: 1,
                    frequency_penalty: 0.8,
                    presence_penalty: 0.8,
                }).then((res) => {
                    return res.data.choices[0].text;
                })
            ]);

            for (let i = 0; i < 7; i++) {
                result[i].push(contentIdea[i]);
                result[i].push(caption[i]);
            }
        } catch (err) {
            console.log(err);
            getContent();
            return;
        }
        setResponses(result);
        console.log(result);
        setEmpty(false);
        setLoading(false);
    }

    // const getContent = async () => {
    //     setEmpty(true)
    //     let contentArray = [[], []]

    //     for (let i = 0; i < 2; i++) {
    //         try {
    //             const res = await openai.createCompletion({
    //                 model: "text-davinci-003",
    //                 prompt: "Create for me a picture idea for my brand that sells product: " + product + " with two sentences.",
    //                 temperature: 1,
    //                 max_tokens: 300,
    //                 top_p: 1,
    //                 frequency_penalty: 0.7,
    //                 presence_penalty: 0.8,
    //             });

    //             const res1 = await openai.createCompletion({
    //                 model: "text-davinci-003",
    //                 prompt: "Create a " + socialMediaPlatform + " caption for the following post idea:" + res.data.choices[0].text + "the voice tone of the caption should be " + voiceTone + ", we are promoting:" + promotion + ", call to action: " + destination + ". Ideal Customer is: " + idealCustomer + " that has the following interests: " + idealCustomerInterests + " and include 5 hashtags, no quotations in your answer and add some emojis if needed.",
    //                 temperature: 1,
    //                 max_tokens: 150,
    //                 top_p: 1,
    //                 frequency_penalty: 0.8,
    //                 presence_penalty: 0.8,
    //             });

    //             const res2 = await openai.createCompletion({
    //                 model: "text-davinci-003",
    //                 prompt: "Create for me a picture idea for my brand that talks about: " + brandDescription + " with two sentences.",
    //                 temperature: 1,
    //                 max_tokens: 300,
    //                 top_p: 1,
    //                 frequency_penalty: 0.7,
    //                 presence_penalty: 0.8,
    //             });

    //             const res3 = await openai.createCompletion({
    //                 model: "text-davinci-003",
    //                 prompt: "Create a " + socialMediaPlatform + " caption for the following post idea:" + res2.data.choices[0].text + "the voice tone of the caption should be " + voiceTone + ", we are promoting:" + promotion + ", call to action: " + destination + " and include 5 hashtags, no quotations in your answer and add some emojis if needed.",
    //                 temperature: 1,
    //                 max_tokens: 150,
    //                 top_p: 1,
    //                 frequency_penalty: 0.8,
    //                 presence_penalty: 0.8,
    //             });

    //             const res4 = await openai.createCompletion({
    //                 model: "text-davinci-003",
    //                 prompt: "Create for me a picture idea for my brand and focus on: " + focus + " with two sentences.",
    //                 temperature: 1,
    //                 max_tokens: 300,
    //                 top_p: 1,
    //                 frequency_penalty: 0.7,
    //                 presence_penalty: 0.8,
    //             });

    //             const res5 = await openai.createCompletion({
    //                 model: "text-davinci-003",
    //                 prompt: "Create a " + socialMediaPlatform + " caption for the following post idea:" + res4.data.choices[0].text + "the voice tone of the caption should be " + voiceTone + ", we are promoting:" + promotion + ", call to action: " + destination + " and include 5 hashtags, no quotations in your answer and add some emojis if needed.",
    //                 temperature: 1,
    //                 max_tokens: 150,
    //                 top_p: 1,
    //                 frequency_penalty: 0.8,
    //                 presence_penalty: 0.8,
    //             });

    //             contentArray[i][0] = res.data.choices[0].text;
    //             contentArray[i][1] = res1.data.choices[0].text;
    //             contentArray[i][2] = res2.data.choices[0].text;
    //             contentArray[i][3] = res3.data.choices[0].text;
    //             contentArray[i][4] = res4.data.choices[0].text;
    //             contentArray[i][5] = res5.data.choices[0].text;

    //         } catch (error) {
    //             console.log(error);
    //             getContent();
    //             return;

    //         }
    //     }
    //     setLoading(false);
    //     setEmpty(false);
    //     console.log(contentArray);
    // }

    const [brandName, setBrandName] = useState("");
    const [brandDescription, setBrandDescription] = useState("");
    const [idealCustomer, setIdealCustomer] = useState("");
    const [voiceTone, setVoiceTone] = useState("");
    const [promotion, setPromotion] = useState("");
    const [socialMediaPlatform, setSocialMediaPlatform] = useState("");
    const [destination, setDestination] = useState("");
    const [product, setProduct] = useState("");
    const [idealCustomerInterests, setIdealCustomerInterests] = useState("");

    const [focus, setFocus] = useState("");

    const [empty, setEmpty] = useState(true);

    const [loading, setLoading] = useState(false);

    let counter = 1;

    const getResult = async () => {
        setLoading(true)
        getContent()
        // console.log(content)
    }

    const resetInputs = () => {
        setLoading(false)
        setBrandName("")
        setBrandDescription("")
        setIdealCustomer("")
        setVoiceTone("")
        setPromotion("")
        setSocialMediaPlatform("")
        setDestination("")
        setProduct("")
        setFocus("")
        setIdealCustomerInterests("")
        setEmpty(true)
    }

    return (
        <div>
            <br />
            <Divider>What do you want to promote this Month?</Divider>
            {/* eslint-disable-next-line*/}
            <form action="javascript:myFunction(); return false;" onSubmit={() => {
                getResult();
            }}>
                <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }} direction={'column'}>
                    <br />
                    <Grid item>
                        <Typography fontSize={13} component="div" gutterBottom>
                            (talk to me like a human)
                        </Typography>
                    </Grid>

                    <Grid item container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
                        <Grid item container spacing={2} alignItems="center" justifyContent="center" direction={'column'}>
                            <Grid item>
                                <TextField required type="text" id="outlined-basic1" style={{ minWidth: 200 }} color="primary" value={promotion} onChange={(event) => { setPromotion(event.target.value) }} label="Goal or Occasion" variant="outlined" />
                            </Grid>
                            <Typography fontSize={13} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                                (Ex. sale, new collection, valentine's day, etc.)
                            </Typography>
                            <Typography fontSize={10} component="div" gutterBottom sx={{ display: { xs: 'block', md: 'none' } }}>
                                (Ex. sale, new collection, valentine's day, etc.)
                            </Typography>
                        </Grid>
                        <Grid item container spacing={2} alignItems="center" justifyContent="center" direction={'column'}>
                            <Grid item>
                                <TextField type="text" id="outlined-basic2" style={{ minWidth: 330 }} color="primary" value={product} onChange={(event) => { setProduct(event.target.value) }} label="Specific Products/Services to Highlight" variant="outlined" />
                            </Grid>
                            <Typography fontSize={13} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                                (Ex. winter jackets, new menu item, delivery service, etc.)
                            </Typography>
                            <Typography fontSize={10} component="div" gutterBottom sx={{ display: { xs: 'block', md: 'none' } }}>
                                (Ex. winter jackets, new menu item, delivery service, etc.)
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <Divider>Social Media Platform & Desired Destination</Divider>
                <br />
                <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '20vh' }}>
                    <Grid item>
                        <FormControl fullWidth>
                            <InputLabel color="primary" id="socialMediaPlatform">Social Media Platform</InputLabel>
                            <Select required id="outlined-basic3" color="primary" style={{ minWidth: 220 }} value={socialMediaPlatform} label="Social Media Platform" onChange={(event) => { setSocialMediaPlatform(event.target.value) }}>
                                <MenuItem value={"Facebook"}>Facebook</MenuItem>
                                <MenuItem value={"Instagram"}>Instagram</MenuItem>
                                <MenuItem value={"Twitter"}>Twitter</MenuItem>
                                <MenuItem value={"Linkedin"}>Linkedin</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item container spacing={2} alignItems="center" justifyContent="center" direction={'column'}>
                        <Grid item>
                            <TextField type="text" id="outlined-basic4" color="primary" style={{ minWidth: 340 }} value={destination} onChange={(event) => { setDestination(event.target.value) }} label="Your Website, Phone, DM, Retail Location" variant="outlined" />
                        </Grid>
                        <Typography fontSize={13} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                            (Ex. our online store boutique.com and our retail location @ 111 Street in Paris etc.)
                        </Typography>
                        <Typography fontSize={10} component="div" gutterBottom sx={{ display: { xs: 'block', md: 'none' } }}>
                            (Ex. our online store boutique.com and our retail<br />location @ 111 Street in Paris etc.)
                        </Typography>
                    </Grid>
                    {/* <Grid item>
                        <TextField type="text" id="outlined-basic9" color="primary" style={{ minWidth: 300 }} value={focus} onChange={(event) => { setFocus(event.target.value) }} label="What do you want to focus on?" variant="outlined" />
                    </Grid> */}
                </Grid>
                <br />
                <Divider>Brand Details</Divider>
                <br />
                <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '20vh' }}>
                    <Grid item>
                        <TextField required id="outlined-basic5" color="primary" value={brandName} onChange={(event) => { setBrandName(event.target.value) }} label="Brand Name" variant="outlined" />
                    </Grid>
                    <Grid item container spacing={2} alignItems="center" justifyContent="center" direction={'column'}>
                        <Grid item>
                            <TextField required id="outlined-basic6" color="primary" value={brandDescription} onChange={(event) => { setBrandDescription(event.target.value) }} label="Brand Description" variant="outlined" />
                        </Grid>
                        <Typography fontSize={13} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                            (Ex. high end fashion boutique in Paris etc.)
                        </Typography>
                        <Typography fontSize={10} component="div" gutterBottom sx={{ display: { xs: 'block', md: 'none' } }}>
                            (Ex. high end fashion boutique in Paris etc.)
                        </Typography>
                    </Grid>
                    <Grid item container spacing={2} alignItems="center" justifyContent="center" direction={'column'}>
                        <Grid item>
                            <TextField required id="outlined-basic7" color="primary" value={idealCustomer} onChange={(event) => { setIdealCustomer(event.target.value) }} label="Ideal Customer" variant="outlined" />
                        </Grid>
                        <Typography fontSize={13} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                            (Ex. young fashionable women who are on trend and like to update their wardrobe etc.)
                        </Typography>
                        <Typography fontSize={10} component="div" gutterBottom sx={{ display: { xs: 'block', md: 'none' } }}>
                            (Ex. young fashionable women who are on trend<br />and like to update their wardrobe etc.)
                        </Typography>
                    </Grid>
                    <Grid item container spacing={2} alignItems="center" justifyContent="center" direction={'column'} >
                        <Grid item >
                            <TextField id="outlined-basic10" color="primary" style={{ minWidth: 200 }} value={idealCustomerInterests} onChange={(event) => { setIdealCustomerInterests(event.target.value) }} label="Ideal Customer Interests" variant="outlined" />
                        </Grid>
                        <Typography fontSize={13} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                            (Ex. hiking, cars, luxury, lifestyle, etc.)
                        </Typography>
                        <Typography fontSize={10} component="div" gutterBottom sx={{ display: { xs: 'block', md: 'none' } }}>
                            (Ex. hiking, cars, luxury, lifestyle, etc.)
                        </Typography>
                    </Grid>
                    <Grid item container spacing={2} alignItems="center" justifyContent="center" direction={'column'}>
                        <Grid item>
                            <TextField required id="outlined-basic8" color="primary" value={voiceTone} onChange={(event) => { setVoiceTone(event.target.value) }} label="Voice Tone" variant="outlined" />
                        </Grid>
                        <Typography fontSize={13} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                            (Ex. formal/professional, casual/informal, persuasive, witty/humorous, emotional, descriptive, etc.)
                        </Typography>
                        <Typography fontSize={10} component="div" gutterBottom sx={{ display: { xs: 'block', md: 'none' } }}>
                            (Ex. formal/professional, casual/informal, persuasive,<br />witty/humorous, emotional, descriptive, etc.)
                        </Typography>
                    </Grid>
                </Grid >
                <br />
                <Divider></Divider>
                <br />
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={0}>
                        <LoadingButton type="submit" loading={loading} variant="contained" color="primary" sx={{ bgcolor: '#7184a8' }} >Generate Content</LoadingButton>
                    </Grid>
                    <Grid item xs={0}>
                        <Button variant="contained" color='primary' onClick={resetInputs}>Reset</Button>
                    </Grid>
                </Grid>
            </form>
            <br />
            <Grid container alignItems="center" justifyContent="center">
                <Typography item fontSize={15} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}><em>*content generation takes around 10 seconds*</em></Typography>
                <Typography item fontSize={12} component="div" gutterBottom sx={{ display: { xs: 'block', md: 'none' } }}><em>*content generation takes around 10 seconds*</em></Typography>
            </Grid>
            <br />
            <Divider></Divider>
            <br />
            <div id="result">
                <Grid container alignItems="center" justifyContent="center" direction={'column'}>
                    <br />
                    {!empty && responses.map((contentItem, index) => {
                        return (
                            <>
                                {console.log(responses[3][0])}
                                <OutlinedCard index={counter++} contentIdea={contentItem[0]} caption={contentItem[1]} />
                                <br />
                            </>
                        )
                    })}
                    {!empty && <Button size="large" variant="contained" style={{ backgroundColor: '#7184a8' }} href="https://sococal.com/products/monthly-subscription" >Sign Up for a full 30-day Calendar!</Button>}
                </Grid>
                <br />
            </div>
        </div >
    )
}