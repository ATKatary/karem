import "./utils.css";
import { Typography } from "@mui/material";

export function Pin(props) {
    const colors = ["yellow", "red", "purple", "orange", "green", "blue"];
    const color = colors[Math.floor(Math.random()*(colors.length - 1))]

    return (
      <div 
      className={`box-shadow circle ${color}-solid box-shadow`} 
      style={{width: "max(1vw, 10px)", height: "max(1vw, 10px)", margin: props.margin}}>
      </div>
    )
}


export function Image(props) {
const angle = props.angle;
const i = props.i;

return (
        <div 
        style={{width: "80%", height: props.height, 
                transform: `rotate(${angle})`, backgroundSize: "100% 100%"}} 
        className={`flex justify-center box-shadow image-cluster-${i}-animation`}>
        <Pin margin="-5px 0px 0px"/>
        </div>
    )
}

export function CoverText(props) {
    const id = props.id;
    const charMap = props.charMap;

    return (
        <div style={props.style} id={id} className="flex">
        {charMap.map(([char, info], i) => {
            return (
                <Typography key={`${id}Char${i}`} 
                sx={{fontSize: info['size'], fontFamily: "'Barrio'", marginRight: info['margin'],
                     color: info['color'], transform: `rotate(${info['angle']}deg)`}}>
                    {char.toUpperCase()}
                </Typography>
            )
        })}
        </div>
    )
}   

export function ImageText(props) {
    const name = props.name
    const text = props.text
    const image = props.image

    return (
        <div className="flex margin-20px align-center">
            <img alt="" src={image.default} style={{width: "max(12vw, 120px)"}} className="pointer" onClick={props.onClick}/>
            <Typography style={props.style}>
                <b>{name}</b><br></br>{text}
            </Typography>
        </div>
    )
}

export function TextImage(props) {
    const name = props.name
    const text = props.text
    const image = props.image

    return (
        <div className="flex margin-20px align-center">
            <Typography style={props.style}>
                <b>{name}</b><br></br>{text}
            </Typography>
            <img alt="" src={image.default} style={{width: "max(12vw, 120px)"}} className="pointer" onClick={props.onClick}/>
        </div>
    )
}
