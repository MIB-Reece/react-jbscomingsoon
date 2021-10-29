import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { 
  Grid, CssBaseline, Box,
  BottomNavigation, BottomNavigationAction
} from '@material-ui/core'
import { styled } from '@mui/material/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import AOS from 'aos'
import 'aos/dist/aos.css'

  const ContentDiv = styled(Box)`
    flex-direction: column;
    width: 100vw;
    height: 45vh;
    display: flex;
    text-align: center;
    h4{
      color: navy;
    }
    .emailInput{
      white-space: nowrap;
      font-size: calc(10px + 2 * ((100vw - 320px) / 680));
      font-weight: bold;
      flex-direction: column;
      line-height: 3;
    }
    .pageText {
    font-size: calc(12px + 6 * ((100vw - 320px) / 680));
    }
  `
  const HeaderImg = styled(Box)`
  display: flex;
  align-self: flex-start;
  flex-direction: row;
    position: relative;
    object-fit: scale-down;
    width: 100vw;
      img{
        width: 100vw;
        height: 50%;
        object-fit: cover;
      }
  `

export default function App(){
  useEffect(() => {
    AOS.init({})
  }, [])

  return(
    <div overflow="clip">
      <Helmet>
        <title>Jump Button Studio</title>
      </Helmet>
    <CssBaseline/>
    <Grid container display="flex" justifyContent="center" width="100vw" height="100vh">
    <HeaderImg data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="500">
      <img
          src="https://media.discordapp.net/attachments/707955771316633720/896612185755774986/unknown.png?width=1217&height=595"
          alt="Jump Button Studio Founders"
      />
    </HeaderImg>
    
    <ContentDiv item justify-content="center" align-items="center">
      <div className="pageText">
        <h4 data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
        >increasing representation within the games and animation industry</h4>
        <h5 data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
        >we're currently working on our website and super excited to show you what we've been working on<br/>
          We want to reimagine what it means to be diverse and inclusive within the games and animation industry.<br/>
          We do this by placing our storytellers and developers first <br/>
          because we believe a diverse and inclusive studio can tell the most relatable and powerful stories.</h5>
      </div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={6} sm={3} gap={{xs: .5}} noWrap className="emailInput" >
          <div className="emailInput" noWrap>
          Get notified when we launch site</div>
          <TextField
                required
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
          </Grid>
          <Grid item xs={6} sm={1} gap={{xs: .5}} flexDirection="column">
          <Button
              type="submit"
              size="large"
              variant="contained"
              sx={{ mt: 6, mb: 1 }}
            >
              Subscribe
          </Button>
          </Grid>
        </Grid>
    </ContentDiv>
    
   <BottomNavigation align-self="flex-end">
          <BottomNavigationAction href="https://www.facebook.com/JumpButtonStudio/"
           label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "black"}}/>} />
          <BottomNavigationAction href="https://twitter.com/JumpButtonS"
          label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "black"}}/>} />
          <BottomNavigationAction href="https://www.instagram.com/jumpbuttonstudio"
          label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: "black"}}/>} />
          <BottomNavigationAction href="https://www.youtube.com/channel/UCLWl_R2zfy94mQjY-Ctqs2g"
          label="YouTube" value="folder" icon={<YouTubeIcon  style={{fill: "black"}}/>} />
        </BottomNavigation>
   
    </Grid>
    </div>
  );
}