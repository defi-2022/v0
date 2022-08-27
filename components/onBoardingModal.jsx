import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide';
import Carousel from 'nuka-carousel'
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Onboard = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      
      <button className= 'text-[1rem]  text-black font-SG  p-0 hover:text-[#ACFF00]' variant="contained" onClick={handleClickOpen}>
        How it Works
      </button>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
       PaperProps={{
        style:{ borderRadius:30}
       }}
      >
        <Box sx={{bgcolor:'black'}}>
        <DialogActions>
        <Button sx={{color:'#ACFF00', fontSize:'30px',display:'flex', flexDirection:'row' ,justifyContent:'right',paddingRight:'18px'}} onClick={handleClose}>&#10005;</Button>
        </DialogActions>
        <DialogContent >
          <DialogContentText id="alert-dialog-slide-description">
            
           <Carousel style={{height:'400px'}} defaultControlsConfig={{
    nextButtonText: '→ ',
    prevButtonText: '←',
    pagingDotsStyle: {
      fill: "white",
      padding:'10px',
      
    }
  }}>
           <img src="./1.jpg" />
           <img src="./2.jpg" />
           <img src="./3.jpg" />
           <img src="./4.jpg" />
      </Carousel>

      
         
          </DialogContentText>
        </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
}
