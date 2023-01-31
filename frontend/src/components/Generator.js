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
                    prompt: "Use a 2 to 4 sentence paragraph to write a content idea for " + product1 + ". Targeting " + idealCustomer + ", target the given customer in an indirect way mentioning his interests and goals only. \nExamples:\n###\nContent Idea: Arrange a photoshoot of a couple tasting your new chocolate collection in a warm well decorated environment. Focus on displaying the product in different ways.\n###\nContent Idea: Every once in a while, it’s a good idea to show the face (or faces) behind the brand. With Reels, you can show snippets of your daily life, passions, goals and any fun facts about yourself or your team.\n###\nContent Idea: A person in joy after discovering the new subscription that helps him generate ideas and content. Focus on the person to convey a message of relief to the give adience - in pencil drawing style\n###\nContent Idea: vide of an influence at the beach, behind her is the car on sale in real life image style. She is talking about the different features of the car in a persuasive manner.\n###\nContent Idea:Showcasing a product or service with a giveaway is a great way to boost engagement on your Instagram. By inviting users to tag friends, share the post and follow your page, you can create excitement about your offerings and reach new audiences all at a pretty low cost.\n###\nContent Idea:Let audiences know that you’d love to see your product in the wild. By creating a hashtag and asking users to tag you in their posts, you can share how others view your product and use it in their own lives.\nContent Idea:",
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
                    prompt: "Use a 2 to 4 sentence paragraph to write a content idea for a business named " + brandName + ", " + brandDescription + ".\nExamples:\n###\nContent Idea: quotes are a great way to get people engaging with your content. Post a quote related to your business.\n###\nContent Idea: Every once in a while, it’s a good idea to show the face (or faces) behind the brand. With Reels, you can show snippets of your daily life, passions, goals and any fun facts about yourself or your team.\n###\nContent Idea: create a poll on Twitter or Instagram Stories. You can also use them to learn more about your audience’s demographics, interests, preferences, and more. This is a great way to build a connection with your audience\n###\nContent Idea: Introducing your team members or showing behind-the-scenes footage of your business can go a long way in humanizing your brand. Create a carousel showing different team members and their roles.\n###\nContent Idea:Showcasing a product or service with a giveaway is a great way to boost engagement on your Instagram. By inviting users to tag friends, share the post and follow your page, you can create excitement about your offerings and reach new audiences all at a pretty low cost.\n###\nContent Idea: One way to get ahead of the game and provide social proof front-and-centre is by sharing testimonials in your posts. This will help build trust among your audience.\nContent Idea:",
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
                    prompt: "Use a 2 to 4 sentence paragraph to write a content idea for " + product2 + ". Targeting " + idealCustomer + ", target the given customer in an indirect way mentioning his interests and goals only. \nExamples:\n###\nContent Idea: Arrange a photoshoot of a couple tasting your new chocolate collection in a warm well decorated environment. Focus on displaying the product in different ways.\n###\nContent Idea: Every once in a while, it’s a good idea to show the face (or faces) behind the brand. With Reels, you can show snippets of your daily life, passions, goals and any fun facts about yourself or your team.\n###\nContent Idea: A person in joy after discovering the new subscription that helps him generate ideas and content. Focus on the person to convey a message of relief to the give adience - in pencil drawing style\n###\nContent Idea: vide of an influence at the beach, behind her is the car on sale in real life image style. She is talking about the different features of the car in a persuasive manner.\n###\nContent Idea:Showcasing a product or service with a giveaway is a great way to boost engagement on your Instagram. By inviting users to tag friends, share the post and follow your page, you can create excitement about your offerings and reach new audiences all at a pretty low cost.\n###\nContent Idea:Let audiences know that you’d love to see your product in the wild. By creating a hashtag and asking users to tag you in their posts, you can share how others view your product and use it in their own lives.\nContent Idea:",
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
                    prompt: "Use a 2 to 4 sentence paragraph to write a content idea for a business named " + brandName + ", " + brandDescription + ".\nExamples:\n###\nContent Idea: quotes are a great way to get people engaging with your content. Post a quote related to your business.\n###\nContent Idea: Every once in a while, it’s a good idea to show the face (or faces) behind the brand. With Reels, you can show snippets of your daily life, passions, goals and any fun facts about yourself or your team.\n###\nContent Idea: create a poll on Twitter or Instagram Stories. You can also use them to learn more about your audience’s demographics, interests, preferences, and more. This is a great way to build a connection with your audience\n###\nContent Idea: Introducing your team members or showing behind-the-scenes footage of your business can go a long way in humanizing your brand. Create a carousel showing different team members and their roles.\n###\nContent Idea:Showcasing a product or service with a giveaway is a great way to boost engagement on your Instagram. By inviting users to tag friends, share the post and follow your page, you can create excitement about your offerings and reach new audiences all at a pretty low cost.\n###\nContent Idea: One way to get ahead of the game and provide social proof front-and-centre is by sharing testimonials in your posts. This will help build trust among your audience.\nContent Idea:",
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
                    prompt: "Use a 2 to 4 sentence paragraph to write a content idea for a business named " + brandName + ", " + brandDescription + ".\nExamples:\n###\nContent Idea: quotes are a great way to get people engaging with your content. Post a quote related to your business.\n###\nContent Idea: Every once in a while, it’s a good idea to show the face (or faces) behind the brand. With Reels, you can show snippets of your daily life, passions, goals and any fun facts about yourself or your team.\n###\nContent Idea: create a poll on Twitter or Instagram Stories. You can also use them to learn more about your audience’s demographics, interests, preferences, and more. This is a great way to build a connection with your audience\n###\nContent Idea: Introducing your team members or showing behind-the-scenes footage of your business can go a long way in humanizing your brand. Create a carousel showing different team members and their roles.\n###\nContent Idea:Showcasing a product or service with a giveaway is a great way to boost engagement on your Instagram. By inviting users to tag friends, share the post and follow your page, you can create excitement about your offerings and reach new audiences all at a pretty low cost.\n###\nContent Idea: One way to get ahead of the game and provide social proof front-and-centre is by sharing testimonials in your posts. This will help build trust among your audience.\nContent Idea:",
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
                    prompt: "Use a 2 to 4 sentence paragraph to write a content idea for " + product3 + ". Targeting " + idealCustomer + ", target the given customer in an indirect way mentioning his interests and goals only. \nExamples:\n###\nContent Idea: Arrange a photoshoot of a couple tasting your new chocolate collection in a warm well decorated environment. Focus on displaying the product in different ways.\n###\nContent Idea: Every once in a while, it’s a good idea to show the face (or faces) behind the brand. With Reels, you can show snippets of your daily life, passions, goals and any fun facts about yourself or your team.\n###\nContent Idea: A person in joy after discovering the new subscription that helps him generate ideas and content. Focus on the person to convey a message of relief to the give adience - in pencil drawing style\n###\nContent Idea: vide of an influence at the beach, behind her is the car on sale in real life image style. She is talking about the different features of the car in a persuasive manner.\n###\nContent Idea:Showcasing a product or service with a giveaway is a great way to boost engagement on your Instagram. By inviting users to tag friends, share the post and follow your page, you can create excitement about your offerings and reach new audiences all at a pretty low cost.\n###\nContent Idea:Let audiences know that you’d love to see your product in the wild. By creating a hashtag and asking users to tag you in their posts, you can share how others view your product and use it in their own lives.\nContent Idea:",
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
                    prompt: "Use a 2 to 4 sentence paragraph to write a content idea for a business named " + brandName + ", " + brandDescription + ".\nExamples:\n###\nContent Idea: quotes are a great way to get people engaging with your content. Post a quote related to your business.\n###\nContent Idea: Every once in a while, it’s a good idea to show the face (or faces) behind the brand. With Reels, you can show snippets of your daily life, passions, goals and any fun facts about yourself or your team.\n###\nContent Idea: create a poll on Twitter or Instagram Stories. You can also use them to learn more about your audience’s demographics, interests, preferences, and more. This is a great way to build a connection with your audience\n###\nContent Idea: Introducing your team members or showing behind-the-scenes footage of your business can go a long way in humanizing your brand. Create a carousel showing different team members and their roles.\n###\nContent Idea:Showcasing a product or service with a giveaway is a great way to boost engagement on your Instagram. By inviting users to tag friends, share the post and follow your page, you can create excitement about your offerings and reach new audiences all at a pretty low cost.\n###\nContent Idea: One way to get ahead of the game and provide social proof front-and-centre is by sharing testimonials in your posts. This will help build trust among your audience.\nContent Idea:",
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
                    prompt: "Caption: Up to 50% SALE Starts Today on ALL Winter Collection. Shop Instore & Online www.fidelverta.com📍Visit Us in Dekweneh or Contact us at 📲71999449 #fidelverta #clothes #sale #fashionstyle #men #winter #fashion #lebanon #shirt #style #onlineshopping #winterlook #shoponline #shoes #boots #shopnow #leather #explore.\nCaption:Bolder, More Rugged and More Fun. To learn more about the #RAV4 #Hybrid , click here: https://toyotalebanon.com/Vehicles/19/rav4-hybrid #Toyota #Rav4 #Hybrid #ToyotaLebanon\nCaption: Hit the studio with a pop of color 🧡 The Empower Collection from @hm_move features zip pants, seamless bikers and tights, all designed so there’s nothing holding you back. #HMmove #HoweverYouMove.\nCreate a " + socialMediaPlatform + " caption for the following Content Idea:\"" + contentIdea[0] + "\"\nThe voice tone of the caption should be: " + voiceTone + "\nWe are promoting:" + promotion + "\nCall to action: " + destination + "\nIdeal Customer is: " + idealCustomer + "\nThat has the following interests: " + idealCustomerInterests + "\nInclude 5 hashtags, no quotations in your answer and add some emojis if needed.",
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
                    prompt: "Caption: Up to 50% SALE Starts Today on ALL Winter Collection. Shop Instore & Online www.fidelverta.com📍Visit Us in Dekweneh or Contact us at 📲71999449 #fidelverta #clothes #sale #fashionstyle #men #winter #fashion #lebanon #shirt #style #onlineshopping #winterlook #shoponline #shoes #boots #shopnow #leather #explore.\nCaption:Bolder, More Rugged and More Fun. To learn more about the #RAV4 #Hybrid , click here: https://toyotalebanon.com/Vehicles/19/rav4-hybrid #Toyota #Rav4 #Hybrid #ToyotaLebanon\nCaption: Hit the studio with a pop of color 🧡 The Empower Collection from @hm_move features zip pants, seamless bikers and tights, all designed so there’s nothing holding you back. #HMmove #HoweverYouMove.\nCreate a " + socialMediaPlatform + " caption for the following Content Idea:\"" + contentIdea[1] + "\"\nThe voice tone of the caption should be: " + voiceTone + "\nWe are promoting:" + promotion + "\nCall to action: " + destination + "\nIdeal Customer is: " + idealCustomer + "\nThat has the following interests: " + idealCustomerInterests + "\nInclude 5 hashtags, no quotations in your answer and add some emojis if needed.",
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
                    prompt: "Caption: Up to 50% SALE Starts Today on ALL Winter Collection. Shop Instore & Online www.fidelverta.com📍Visit Us in Dekweneh or Contact us at 📲71999449 #fidelverta #clothes #sale #fashionstyle #men #winter #fashion #lebanon #shirt #style #onlineshopping #winterlook #shoponline #shoes #boots #shopnow #leather #explore.\nCaption:Bolder, More Rugged and More Fun. To learn more about the #RAV4 #Hybrid , click here: https://toyotalebanon.com/Vehicles/19/rav4-hybrid #Toyota #Rav4 #Hybrid #ToyotaLebanon\nCaption: Hit the studio with a pop of color 🧡 The Empower Collection from @hm_move features zip pants, seamless bikers and tights, all designed so there’s nothing holding you back. #HMmove #HoweverYouMove.\nCreate a " + socialMediaPlatform + " caption for the following Content Idea:\"" + contentIdea[2] + "\"\nThe voice tone of the caption should be: " + voiceTone + "\nWe are promoting:" + promotion + "\nCall to action: " + destination + "\nIdeal Customer is: " + idealCustomer + "\nThat has the following interests: " + idealCustomerInterests + "\nInclude 5 hashtags, no quotations in your answer and add some emojis if needed.",
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
                    prompt: "Caption: Up to 50% SALE Starts Today on ALL Winter Collection. Shop Instore & Online www.fidelverta.com📍Visit Us in Dekweneh or Contact us at 📲71999449 #fidelverta #clothes #sale #fashionstyle #men #winter #fashion #lebanon #shirt #style #onlineshopping #winterlook #shoponline #shoes #boots #shopnow #leather #explore.\nCaption:Bolder, More Rugged and More Fun. To learn more about the #RAV4 #Hybrid , click here: https://toyotalebanon.com/Vehicles/19/rav4-hybrid #Toyota #Rav4 #Hybrid #ToyotaLebanon\nCaption: Hit the studio with a pop of color 🧡 The Empower Collection from @hm_move features zip pants, seamless bikers and tights, all designed so there’s nothing holding you back. #HMmove #HoweverYouMove.\nCreate a " + socialMediaPlatform + " caption for the following Content Idea:\"" + contentIdea[3] + "\"\nThe voice tone of the caption should be: " + voiceTone + "\nWe are promoting:" + promotion + "\nCall to action: " + destination + "\nIdeal Customer is: " + idealCustomer + "\nThat has the following interests: " + idealCustomerInterests + "\nInclude 5 hashtags, no quotations in your answer and add some emojis if needed.",
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
                    prompt: "Caption: Up to 50% SALE Starts Today on ALL Winter Collection. Shop Instore & Online www.fidelverta.com📍Visit Us in Dekweneh or Contact us at 📲71999449 #fidelverta #clothes #sale #fashionstyle #men #winter #fashion #lebanon #shirt #style #onlineshopping #winterlook #shoponline #shoes #boots #shopnow #leather #explore.\nCaption:Bolder, More Rugged and More Fun. To learn more about the #RAV4 #Hybrid , click here: https://toyotalebanon.com/Vehicles/19/rav4-hybrid #Toyota #Rav4 #Hybrid #ToyotaLebanon\nCaption: Hit the studio with a pop of color 🧡 The Empower Collection from @hm_move features zip pants, seamless bikers and tights, all designed so there’s nothing holding you back. #HMmove #HoweverYouMove.\nCreate a " + socialMediaPlatform + " caption for the following Content Idea:\"" + contentIdea[4] + "\"\nThe voice tone of the caption should be: " + voiceTone + "\nWe are promoting:" + promotion + "\nCall to action: " + destination + "\nIdeal Customer is: " + idealCustomer + "\nThat has the following interests: " + idealCustomerInterests + "\nInclude 5 hashtags, no quotations in your answer and add some emojis if needed.",
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
                    prompt: "Caption: Up to 50% SALE Starts Today on ALL Winter Collection. Shop Instore & Online www.fidelverta.com📍Visit Us in Dekweneh or Contact us at 📲71999449 #fidelverta #clothes #sale #fashionstyle #men #winter #fashion #lebanon #shirt #style #onlineshopping #winterlook #shoponline #shoes #boots #shopnow #leather #explore.\nCaption:Bolder, More Rugged and More Fun. To learn more about the #RAV4 #Hybrid , click here: https://toyotalebanon.com/Vehicles/19/rav4-hybrid #Toyota #Rav4 #Hybrid #ToyotaLebanon\nCaption: Hit the studio with a pop of color 🧡 The Empower Collection from @hm_move features zip pants, seamless bikers and tights, all designed so there’s nothing holding you back. #HMmove #HoweverYouMove.\nCreate a " + socialMediaPlatform + " caption for the following Content Idea:\"" + contentIdea[5] + "\"\nThe voice tone of the caption should be: " + voiceTone + "\nWe are promoting:" + promotion + "\nCall to action: " + destination + "\nIdeal Customer is: " + idealCustomer + "\nThat has the following interests: " + idealCustomerInterests + "\nInclude 5 hashtags, no quotations in your answer and add some emojis if needed.",
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
                    prompt: "Caption: Up to 50% SALE Starts Today on ALL Winter Collection. Shop Instore & Online www.fidelverta.com📍Visit Us in Dekweneh or Contact us at 📲71999449 #fidelverta #clothes #sale #fashionstyle #men #winter #fashion #lebanon #shirt #style #onlineshopping #winterlook #shoponline #shoes #boots #shopnow #leather #explore.\nCaption:Bolder, More Rugged and More Fun. To learn more about the #RAV4 #Hybrid , click here: https://toyotalebanon.com/Vehicles/19/rav4-hybrid #Toyota #Rav4 #Hybrid #ToyotaLebanon\nCaption: Hit the studio with a pop of color 🧡 The Empower Collection from @hm_move features zip pants, seamless bikers and tights, all designed so there’s nothing holding you back. #HMmove #HoweverYouMove.\nCreate a " + socialMediaPlatform + " caption for the following Content Idea:\"" + contentIdea[6] + "\"\nThe voice tone of the caption should be: " + voiceTone + "\nWe are promoting:" + promotion + "\nCall to action: " + destination + "\nIdeal Customer is: " + idealCustomer + "\nThat has the following interests: " + idealCustomerInterests + "\nInclude 5 hashtags, no quotations in your answer and add some emojis if needed.",
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
    const [product1, setProduct1] = useState("");
    const [product2, setProduct2] = useState("");
    const [product3, setProduct3] = useState("");
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
        setProduct1("")
        setProduct2("")
        setProduct3("")
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
                                <TextField required type="text" id="outlined-basic1" style={{ minWidth: 330 }} color="primary" value={promotion} onChange={(event) => { setPromotion(event.target.value) }} label="Goal or Occasion" variant="outlined" />
                            </Grid>
                            <Typography fontSize={13} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                                (Ex. sale, new collection, valentine's day, etc.)
                            </Typography>
                            <Typography fontSize={10} component="div" gutterBottom sx={{ display: { xs: 'block', md: 'none' } }}>
                                (Ex. sale, new collection, valentine's day, etc.)
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <Divider>Social Media Platform & Desired Destination</Divider>
                <br />
                <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ minHeight: '20vh' }}>
                    <Grid item container spacing={2} alignItems="center" justifyContent="center">
                        <Grid item>
                            <FormControl fullWidth>
                                <InputLabel color="primary" id="socialMediaPlatform">Social Media Platform</InputLabel>
                                <Select required id="outlined-basic3" color="primary" style={{ minWidth: 330 }} value={socialMediaPlatform} label="Social Media Platform" onChange={(event) => { setSocialMediaPlatform(event.target.value) }}>
                                    <MenuItem value={"Facebook"}>Facebook</MenuItem>
                                    <MenuItem value={"Instagram"}>Instagram</MenuItem>
                                    <MenuItem value={"Twitter"}>Twitter</MenuItem>
                                    <MenuItem value={"Linkedin"}>Linkedin</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <TextField type="text" id="outlined-basic4" color="primary" style={{ minWidth: 340 }} value={destination} onChange={(event) => { setDestination(event.target.value) }} label="Your Website, Phone, DM, Retail Location" variant="outlined" />
                        </Grid>
                        &nbsp;
                        <Typography fontSize={13} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                            <br />
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
                    <Grid item container spacing={2} alignItems="center" justifyContent="center" >
                        <Grid item>
                            <TextField required id="outlined-basic5" color="primary" style={{ minWidth: 330 }} value={brandName} onChange={(event) => { setBrandName(event.target.value) }} label="Brand Name" variant="outlined" />
                        </Grid>
                        <Grid item>
                            <TextField required id="outlined-basic6" color="primary" style={{ minWidth: 330 }} value={brandDescription} onChange={(event) => { setBrandDescription(event.target.value) }} label="Brand Description" variant="outlined" />
                        </Grid>
                        &nbsp;
                        <Typography fontSize={13} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                            <br />
                            (Ex. high end fashion boutique in Paris etc.)
                        </Typography>
                        <Typography fontSize={10} component="div" gutterBottom sx={{ display: { xs: 'block', md: 'none' } }}>
                            (Ex. high end fashion boutique in Paris etc.)
                        </Typography>
                    </Grid>

                    <Grid item container spacing={2} alignItems="center" justifyContent="center" direction={'column'}>
                        <Grid item>
                            <TextField required id="outlined-basic7" color="primary" style={{ minWidth: 330 }} value={idealCustomer} onChange={(event) => { setIdealCustomer(event.target.value) }} label="Ideal Customer" variant="outlined" />
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
                            <TextField id="outlined-basic10" color="primary" style={{ minWidth: 330 }} value={idealCustomerInterests} onChange={(event) => { setIdealCustomerInterests(event.target.value) }} label="Ideal Customer Interests" variant="outlined" />
                        </Grid>
                        <Typography fontSize={13} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                            (Ex. hiking, cars, luxury, lifestyle, etc.)
                        </Typography>
                        <Typography fontSize={10} component="div" gutterBottom sx={{ display: { xs: 'block', md: 'none' } }}>
                            (Ex. hiking, cars, luxury, lifestyle, etc.)
                        </Typography>
                    </Grid>

                </Grid >
                <br />
                <Divider>Products & Services (Up to 3)</Divider>
                <br />
                <Grid item container spacing={2} alignItems="center" justifyContent="center" >
                    <Grid item>
                        <TextField required type="text" id="outlined-basic2" style={{ minWidth: 330 }} color="primary" value={product1} onChange={(event) => { setProduct1(event.target.value) }} label="Write your product name and description" variant="outlined" />
                    </Grid>
                    <Grid item>
                        <TextField type="text" id="outlined-basic2" style={{ minWidth: 330 }} color="primary" value={product2} onChange={(event) => { setProduct2(event.target.value) }} label="Write your product name and description" variant="outlined" />
                    </Grid>
                    <Grid item>
                        <TextField type="text" id="outlined-basic2" style={{ minWidth: 330 }} color="primary" value={product3} onChange={(event) => { setProduct3(event.target.value) }} label="Write your product name and description" variant="outlined" />
                    </Grid>
                    &nbsp;
                    <Typography fontSize={13} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                        <br />
                        (Ex. winter jackets, new menu item, delivery service, etc.)
                    </Typography>
                    <Typography fontSize={10} component="div" gutterBottom sx={{ display: { xs: 'block', md: 'none' } }}>
                        (Ex. winter jackets, new menu item, delivery service, etc.)
                    </Typography>
                </Grid>
                <br />
                <Divider>Tone of Voice</Divider>
                <br />
                <Grid item container spacing={2} alignItems="center" justifyContent="center" direction={'column'}>
                    <Grid item>
                        <TextField required id="outlined-basic8" color="primary" style={{ minWidth: 330 }} value={voiceTone} onChange={(event) => { setVoiceTone(event.target.value) }} label="Voice Tone" variant="outlined" />
                    </Grid>
                    <Typography fontSize={13} component="div" gutterBottom sx={{ display: { xs: 'none', md: 'block' } }}>
                        (Ex. formal/professional, casual/informal, persuasive, witty/humorous, emotional, descriptive, etc.)
                    </Typography>
                    <Typography fontSize={10} component="div" gutterBottom sx={{ display: { xs: 'block', md: 'none' } }}>
                        (Ex. formal/professional, casual/informal, persuasive,<br />witty/humorous, emotional, descriptive, etc.)
                    </Typography>
                </Grid>
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
                                {/* {console.log(responses[3][0])} */}
                                <OutlinedCard index={counter++} contentIdea={contentItem[0]} caption={contentItem[1]} />
                                <br />
                            </>
                        )
                    })}
                    {!empty && <Button size="large" target="_blank" variant="contained" style={{ backgroundColor: '#7184a8' }} href="https://sococal.com/products/monthly-subscription" >Sign Up for a full 30-day Calendar!</Button>}
                </Grid>
                <br />
            </div>
        </div >
    )
}