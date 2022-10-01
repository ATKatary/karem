import './content.css';
import resume from "../media/files/resume.pdf";

export function Resume() {
  
  return (
    <div style={{color: "black", height: "100%"}} id="resume" className="none">
      <embed src={resume} width="100%" height="92%" />
    </div>
  )
}
