import { IconButton } from '@mui/material';
import './content.css';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export function Contact(props) {
  const sendMessage = () => {
    document.getElementById("sendBtn").classList.add("slide-20");
    // document.getElementById("sendBtn").style.color = "blue"
  }

  return (
    <div style={{color: "black"}} id="contact" className="none align-center justify-center width-100 height-100 column">
      <textarea placeholder="Write your message here ..." style={{width: "max(25vw, 250px)", height: "max(15vw, 150px)", resize: "none", outline: "none", backgroundImage: `url(${props.images("./grayConstruction.png").default})`}} className="box-shadow no-border padding-10px margin-20px"></textarea>
      <IconButton color="primary" aria-label="send" id="sendBtn">
        <SendIcon className="align-self-start" onClick={sendMessage}/>
      </IconButton>
      <div className="flex align-center justicy-center">
        <IconButton color="primary" aria-label="send" onClick={() => window.location = ""}>
          <LinkedInIcon fontSize="large" className="margin-10px" style={{color: "#000"}}/>
        </IconButton>
      </div>
    </div>
  )
}
