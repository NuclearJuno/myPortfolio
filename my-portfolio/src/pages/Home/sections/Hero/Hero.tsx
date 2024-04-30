import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
    }))

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "100%",
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <StyledImg src={Avatar} alt="avatar" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center"> Haroldo Junior</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center"> Full-Stack Dev</Typography>
                            <Grid container display="flex" justifyContent="center">
                                <Grid item md={6} xs={12} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <DownloadIcon />
                                        Download CV
                                    </StyledButton>
                                </Grid>
                                <Grid item md={6} xs={12} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <EmailIcon />
                                        Contact Me
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero >

        </>
    )
}

export default Hero