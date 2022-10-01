import "./landing.css";
import NavBar from "../navbar/navbar.js";
import Footer from "../footer/footer.js";
import {Pin, Image, CoverText} from "../personal_util/components.js"
import { Projects } from "../content/projects";
import { Research } from "../content/research";
import { Work } from "../content/work";
import { Contact } from "../content/contact";
import { Resume } from "../content/resume";

/*** GLobal Constants ***/

function Landing() {
  const images = require.context('../media/images', true);
  const createCharMap = (size, color, angle, margin = "0") => {return {'size': size, 'color': color, 'angle': angle, 'margin': margin}};
  const hello = [
    ['h', createCharMap("max(8vw, 80px)", "#ff0303", "-10")], 
    ['e', createCharMap("max(8vw, 80px)", "#00e0ff", "-5")], 
    ['l', createCharMap("max(8vw, 80px)", "#fff", "-3")],
    ['l', createCharMap("max(8vw, 80px)", "#000", "2")], 
    ['o', createCharMap("max(8vw, 80px)", "#fff", "5")]
  ]
  const iAmKarem = [
    ['i', createCharMap("max(5vw, 50px)", "#fff", "5", "15px")],
    ['am', createCharMap("max(5vw, 50px)", "#05ff00", "-5", "15px")],
    ['k', createCharMap("max(5vw, 50px)", "#fff", "-3")],
    ['are', createCharMap("max(5vw, 50px)", "#039700", "2")],
    ['m', createCharMap("max(5vw, 50px)", "#000", "5")]
  ]
  const computerScientistWriter = [
    ['comp', createCharMap("max(4vw, 40px)", "#000", "5")],
    ['ut', createCharMap("max(4vw, 40px)", "#fff", "-5")],
    ['er', createCharMap("max(4vw, 40px)", "#000", "-3", "15px")],
    ['s', createCharMap("max(4vw, 40px)", "#fff", "2")],
    ['cient', createCharMap("max(4vw, 40px)", "#d0d0d0", "5")],
    ['ist', createCharMap("max(4vw, 40px)", "#fff", "-5", "15px")],
    ['|', createCharMap("max(4vw, 40px)", "#fff", "-5", "15px")],
    ['wri', createCharMap("max(4vw, 40px)", "#00e0ff", "5")],
    ['te', createCharMap("max(4vw, 40px)", "#000", "-5")],
    ['r', createCharMap("max(4vw, 40px)", "#fff", "5")]
  ]
  const welcomeToMySliceOfTheWeb = [
    ['we', createCharMap("max(3vw, 30px)", "#bb0909", "5")],
    ['lcom', createCharMap("max(3vw, 30px)", "#ff0303", "-5")],
    ['e', createCharMap("max(3vw, 30px)", "#fff", "-3", "15px")],
    ['to', createCharMap("max(3vw, 30px)", "#fff", "2", "15px")],
    ['m', createCharMap("max(3vw, 30px)", "#fff", "5")],
    ['y', createCharMap("max(3vw, 30px)", "#05ff00", "-5", "15px")],
    ['sli', createCharMap("max(3vw, 30px)", "#05ff00", "-5")],
    ['ce', createCharMap("max(3vw, 30px)", "#000", "5", "15px")],
    ['of', createCharMap("max(3vw, 30px)", "#000", "-5", "15px")],
    ['t', createCharMap("max(3vw, 30px)", "#fff", "5")],
    ['he', createCharMap("max(3vw, 30px)", "#039700", "5", "15px")],
    ['we', createCharMap("max(3vw, 30px)", "#039700", "5")],
    ['b', createCharMap("max(3vw, 30px)", "#fff", "5")]
  ]
  return (
    <>
    <div id="root" className="appear-animation width-100 flex justify-between align-center height-95">
        {/** Left Art Gallery **/}
        <div style={{width: "17%", height: "max(50vw, 500px)"}} className="flex column align-center justify-around">
          <Image i={0} angle="5deg" height="35%"/>
          <Image i={2} angle="-3deg" height="30%"/>
        </div>

        {/** Book **/}
        <div style={{width: "65%", height: "max(41vw, 410px)"}} className="flex align-center justify-center box-shadow cardboard">
          <div id="paper" style={{width: "95%", height: "120%", marginLeft: "-2%", backgroundColor: "#fff"}}>
            <NavBar coverId={"cover"}/>
            {/** Sections **/}
            <Resume />
            <Projects images={images}/>
            <Research images={images}/>
            <Work images={images}/>
            <Contact images={images}/>
            {/** Cover **/}
            <div 
              id="cover"
              style={{width: "105%", height: `${500/6}%`, marginTop: "3%", marginLeft: "-3%", position: "sticky"}} 
              className="cardboard flex">

              {/** Content **/}
              <div className="flex column">
                <div className="flex">
                  <CoverText charMap={hello} id={"hello"} style={{margin: "30px"}}/>
                  <div className="flex justify-end" style={{height: "fit-content"}}>
                    <img 
                      alt="gt" 
                      src={images("./gt_sticker.png").default} 
                      style={{width: "32%"}}/>
                  </div> 
                </div>
                <div>
                  <CoverText charMap={iAmKarem} id={"iAmKarem"} style={{marginLeft: "90px"}}/>
                  <CoverText charMap={computerScientistWriter} id={"computerScientistWriter"} style={{marginLeft: "90px"}}/>
                  <CoverText charMap={welcomeToMySliceOfTheWeb} id={"welcomeToMySliceOfTheWeb"} style={{marginLeft: "90px"}}/>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/** Right Art Gallery **/}
        <div style={{width: "17%", height: "max(60vw, 600px)"}} className="flex column align-center justify-around">
          <Image i={1} angle="-3deg" height="17%"/>
          <Image i={3} angle="7deg" height="20%"/>
          <Image i={4} angle="2deg" height="15%"/>
        </div>

      </div>
      <Footer/>
    </>
  );
}

export default Landing;
