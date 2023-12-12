import { Box, Stack, Typography } from "@mui/material"
import img from './images/bg.jpg'
import milk from './images/mm.png'
import { useState } from "react"
import './App.css'
import ReactCardFlip from "react-card-flip"
import { TypeAnimation } from "react-type-animation"
import  gif  from './images/giphy.gif'

const audio = new Audio('shrek.mp3')

const App = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    if(!click) {
      audio.play()
    } else {
      audio.pause()
    }
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: `url(${gif})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}>
      <ReactCardFlip isFlipped={click} flipDirection="horizontal">
        <Box onClick={handleClick} sx={{ display: 'flex', justifyContent: 'center', width: {xs: '300px', sm: '450px'}, aspectRatio: '7/11', backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat', cursor: 'pointer', boxShadow: '5px 0px 5px 0px rgba(0,0,0,0.2)' }}>
          <Stack>
            <Typography sx={{ textAlign: 'center', fontFamily: 'Pinyon Script', fontSize: {xs: '40px', sm: '50px'}, marginY: {xs: '60px', sm: '50px'} }}>Merry Christmas</Typography>
            <img src={milk} style={{ margin: '0 50px 0 50px', width: '200px' }}></img>
          </Stack>
        </Box>
        <Box onClick={handleClick} sx={{ display: 'flex', padding: '10px', background: 'white', alignItems: 'center', justifyContent: 'center', width: {xs: '300px', sm: '450px'}, aspectRatio: '7/11', cursor: 'pointer', boxShadow: '5px 0px 5px 0px rgba(0,0,0,0.2)' }}>
          <TypeAnimation className={'type'} style={{whiteSpace: 'pre-line'}} speed={40} sequence={[`Your smile, a radiant sun that lights my day\nOur hearts entwined, a love that will never sway\nUnderneath the stars, our dreams begin to play\nReveling in the magic, in your arms, I'll stay\n\nMoments with you, a treasure beyond compare\nOverflowing joy, a bond that's truly rare\nMoments of laughter, moments we both share\n\n\nFrom Pookie <3`]} omitDeletionAnimation={true} wrapper="span"></TypeAnimation>
        </Box>
      </ReactCardFlip>
    </Box>
  )
}

export default App
