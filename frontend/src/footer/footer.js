import './footer.css';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <>
      <footer className="flex column align-center">
        <Typography sx={{fontSize: "max(1vw, 10px)", fontFamily: "'Annie Use Your Telescope'", color: "#fff"}} variant="subtitle" id="copyrightNotice" component="div" gutterBottom>2022 © All Rights Reserved</Typography>
        <Typography sx={{fontSize: "max(1vw, 10px)", fontFamily: "'Annie Use Your Telescope'", color: "#fff"}} variant="subtitle" component="div" gutterBottom>A Katary Production</Typography>
      </footer>
    </>
  )
}

export default Footer;