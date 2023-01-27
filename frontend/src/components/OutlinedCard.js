import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function OutlinedCard({ contentIdea, caption, index }) {

    return (
        <>
            <Box sx={{ minWidth: 300, display: "inline-block", display: { xs: 'none', md: 'block' } }}>
                <Card variant="outlined" style={{ background: "white", border: "3px solid gray", borderRadius: "24px" }}>
                    {/*popup card can be later added with info inside of it*/}
                    {/* <CardActionArea > */}
                    <React.Fragment>
                        <CardContent>
                            <Grid container alignItems="center" justifyContent="center">
                                <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                    Day {index}
                                </Typography>
                            </Grid>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Content Idea
                            </Typography>
                            <Typography variant="body1" component="div">
                                {contentIdea}
                            </Typography>
                            <br />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                Caption
                            </Typography>
                            <Typography variant="body1">
                                {caption}
                            </Typography>
                        </CardContent>
                    </React.Fragment>
                    {/* </CardActionArea> */}
                </Card>
            </Box >
            <Box sx={{ maxWidth: 400, display: "inline-block", display: { xs: 'block', md: 'none' } }}>
                <Card variant="outlined" style={{ background: "white", border: "3px solid gray", borderRadius: "24px" }}>
                    {/*popup card can be later added with info inside of it*/}
                    {/* <CardActionArea > */}
                    <React.Fragment>
                        <CardContent>
                            <Grid container alignItems="center" justifyContent="center">
                                <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                    Day {index}
                                </Typography>
                            </Grid>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Content Idea
                            </Typography>
                            <Typography variant="body1" component="div">
                                {contentIdea}
                            </Typography>
                            <br />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                Caption
                            </Typography>
                            <Typography variant="body1">
                                {caption}
                            </Typography>
                        </CardContent>
                    </React.Fragment>
                    {/* </CardActionArea> */}
                </Card>
            </Box >
        </>
    );
}