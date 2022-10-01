import './navbar.css';
import {Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { changeVisibility } from '../personal_util/display';

function NavBar(props) {
  const sections = ["Resume", "Projects", "Research", "Work", "Contact"]
  const style = {fontSize: "max(1.5vw, 15px)", fontFamily: "'Annie Use Your Telescope'", marginLeft: "20px", marginTop: "5px", color: "#000", opacity: "50%"}
  const show = (id) => {
    for (const section of sections) changeVisibility("hide", section.toLowerCase());
    // hiding cover
    const cover = document.getElementById(props.coverId);
    cover.classList.remove("hide-animation")
    cover.classList.add("hide-animation")
    // displaying page
    setTimeout(() => {}, 10000)
    const section = document.getElementById(id);
    section.classList.remove("appear-animation")
    section.classList.add("appear-animation")
    changeVisibility("show", id);
  }
  
  return (
    <div className="width-100">
      {sections.map(section => <Button key={`${section}Btn`} sx={style} className="text-center darken" onClick={() => {show(section.toLowerCase())}}>{section}</Button>)}
    </div>
  )
}

export default NavBar;