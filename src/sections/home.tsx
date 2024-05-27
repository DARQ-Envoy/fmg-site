import React from "react";
import art from "../assets/images/header-images/art.jpg";
import culture from "../assets/images/header-images/culture.jpg";
import music from "../assets/images/header-images/music.jpg";
import naira from "../assets/images/header-images/naira.webp";
import protests from "../assets/images/header-images/protests.jpg";
import schoolGirl from "../assets/images/header-images/school-girl.jpg";
import {BASE} from "../App"


import gsap from "gsap"

import { useEffect, useState, useRef } from "react";
import { Logo } from "./logo";



export const Header:React.FC =()=>{
const imageElement:React.MutableRefObject<HTMLImageElement | null>  = useRef<HTMLImageElement|null>(null)
const allImages:Array<string>=[art, culture, music, naira, protests, schoolGirl];
const [displayImage, setDisplayImage] = useState<string>(allImages[0]);
const imageStyling = " h-full w-full object-cover absolute top-0 left-0 opacity-[0] ";
const headerStyling = " w-[100vw] h-[100vh] relative flex align-center justify-center bg-black "


// const displayPhoto: PhotoDisplay = (img,displayState)=>{
        
// }
// const removePhoto: PhotoDisplay = ()=>{

// }
// displayPhoto()


function nextDisplayImage(image:string,imageList:Array<string>){
    const imageListLength:number = imageList.length;
    const imageIndex:number = imageList.indexOf(image);
    const firstImage = imageList[0];
    const highestIndex = imageListLength-1
    let nextImage = ""
    if(imageIndex === -1){
        console.error("This item does not exist in the list.");
    }
    else if(imageIndex === highestIndex){
        nextImage = firstImage;
    }
    else{
        nextImage = imageList[imageIndex+1]
    }
    console.log()
    return nextImage
}
useEffect(()=>{

const animation = gsap.context(()=>{

const timeline = gsap.timeline();
if(displayImage == art){
    console.log("image is art",displayImage)
    timeline.to("#header",{
        delay:1,
        backgroundColor:"#d1d5db",
        duration:1.5,
        ease:"none",
    })
    timeline.to("#header-img",{
        delay:0.9,
        opacity:1,
        duration: 1.5,
        ease:"none",
    },"<")

    timeline.to("#header-img",{
        opacity: 0,
        duration:1.3,
        ease:"none"
    }, ">+=0.3")

    timeline.to("#header",{
        backgroundColor:"#000000",
        duration:1.5,
        ease:"none",
        onComplete:()=>{
            const newImage = nextDisplayImage(displayImage,allImages);
            setDisplayImage(newImage)
        }
    },"<")





}
else{
    console.log("image is not art")
    timeline.to("#header-img",{
        delay:1,
        duration:1.5,
        opacity: 1,
        ease:"none",
    })

    timeline.to("#header-img",{
        opacity: 0,
        delay:0.3,
        duration:1.5,
        ease:"none",
        onComplete:()=>{
            const newImage = nextDisplayImage(displayImage,allImages);
            setDisplayImage(newImage)
        }
    })
}


timeline.to("#header-img",{
        opacity: 0,
        delay:0.3,
        duration:1.5,
        ease:"none",
        onComplete:()=>{
            const newImage = nextDisplayImage(displayImage,allImages);
            setDisplayImage(newImage)
        }
    })



    })

    return ()=>{
        animation.revert()
    }
},[displayImage])



return (
<header className={headerStyling} id="header">
    <Logo/>
                <img id="header-img" src={displayImage} className={displayImage == music || displayImage == art ? imageStyling + " md:object-contain ":imageStyling} ref={(ref)=>{imageElement.current = ref}}/>
                    <div className="opacity-[0.2] bg-black absolute top-0 left-0 h-full w-full z-[50]" id="overlay"></div>
                    <div id="header-text" className="relative z-[100] flex flex-col items-center justify-center gap-[60px] max-w-[800px] px-[10px] ">
                        <h1 className="text-white text-4xl text-center border-t-2 border-white pt-4 px-0 mx-[40px] ">Empowering Africa Through Dynamic Media Experiences.</h1>
                        <p className="text-white text-center text-1xl md:px-[20%] px-[20px]">Unlock the Power of our Multiplatform Brand to Share Compelling Stories, Drive Impactful Change, and Cultivate Lucrative Opportunities.</p>
                        <a href={`about`} className="text-white border-[1px] self-end block border-dashed p-[10px] border-white hover:bg-gray-200 hover:bg-opacity-[60%] hover:border-none hover:text-black rounded-[8px]">Learn More</a>
                    </div>
</header>
)
};
