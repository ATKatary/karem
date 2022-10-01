import * as React from 'react';
import './gallery.css';
import {Stack, Button, Typography, Slide} from '@mui/material';
import {CardBucket2D} from './utils.ts';

export function SlideShow(props) {
    const images = props.images;
    return (
        <Stack id={props.id} direction="row" className="pause width-100 slideshow scroll margin-10px">
            <div className="flex align-center">
            {images.length > 0 ?
                images.map((item, index) => {
                    return (<img className="margin-5px image box-shadow" key={`pic${index}`} src={item.default} alt=""/>);
                    }) :  <></>}
            </div>
        </Stack>    
    )
}

export function Shuffle(props) {
    const images = props.images
    return (
        <Stack id={props.id} direction="row" className="width-100 shuffle scroll margin-10px pause">
        {images.length > 0 ?
            images.map((item, index) => {
                return (<img className="margin-5px image enlarge" key={`pic${index}`} src={item.default} alt=""/>);
                }) :  <></>}
    </Stack> 
    )
}

export function ProjectSlideShow(props) {
    const projects = props.projects;

    return (
        <Stack id={props.id} direction="row" className="pause width-100 slideshow scroll margin-10px">
            <div className="flex align-center">
            {projects.length > 0 ?
                projects.map((project, index) => {
                    return (
                    <Button key={index} className={`${project['color']} gallery-project-box box-shadow pointer flex column opacity-95`} onClick={() => {window.location = project['link']}}>
                        <Typography className="text-white font-2-5vw">{project['title']}</Typography>
                        <Typography className="text-white font-1-5vw width-90">{project['description']}</Typography>
                        <img src={`${project['img']?.default}`} alt="" className="width-50 margin-top-20px"/>
                    </Button>);}) :  <></>}
            </div>
        </Stack>    
    )
}

export function FallingBlocks(props) {
    const cards = props.cards;
    const containerRef = React.useRef(null);
    const bucket = new CardBucket2D({width: window.innerWidth - 20, height: 300});
    const marginTopCompensate = (x, h) => {return (x - bucket.size.height) / h;};
    for (const card of cards) bucket.drop(card);

    return (
        <div className="gray width-100 flex justify-center overflow-hidden" style={{height: `${bucket.size.height + 42}px`}}>
            <div style={{height: `${bucket.size.height}px`, width: `${bucket.size.width}px`}} className="absolute">
                {bucket.cards.map((card, i) => {
                    return (
                    <Slide direction="down" in={true} key={`skill${i}`} container={containerRef.current} timeout={(1 - marginTopCompensate(card.marginTop, card.height)) * 1000}>
                        <div 
                        style={{width: `${card.width}px`, height: `${card.height}px`,
                                transform: `rotate(${card.angle}deg)`, marginTop: `${card.marginTop + marginTopCompensate(card.marginTop, card.height)}px`, 
                                marginLeft: `${card.marginLeft}px`}} 
                        className={`absolute card extrabold flex align-center justify-center`}>
                            {card.name}
                        </div>
                    </Slide>
                    )
                })}
            </div>
        </div>
    )
}

