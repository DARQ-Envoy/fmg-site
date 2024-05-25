import { useEffect, useRef } from 'react'
import newspapers1 from "../assets/images/about-images/daily-times-1.jpg"
import newspapers2 from "../assets/images/about-images/daily-times-2.jpg"
import newspapers3 from "../assets/images/about-images/daily-times-3.jpg"
import newspapers4 from "../assets/images/about-images/daily-times-4.jpg"
import firstOct from "../assets/images/subsidiaries/first-october-limited-logo.jpg"
import folioComm from "../assets/images/subsidiaries/folio-communications-logo.jpg"
import heroes from "../assets/images/subsidiaries/heroes-award.jpg"
import msNg from "../assets/images/subsidiaries/miss-nigeria-logo.jpg"



import gsap from 'gsap';
import {Typewriter} from "react-simple-typewriter" 
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { Logo } from './logo'
gsap.registerPlugin(ScrollToPlugin);




const About = () => {
const actions=["Enlightening", "Educating", "Inspiring"];
const allImages = [newspapers1, newspapers2, newspapers3, newspapers4];
const allNewsRef = useRef<HTMLDivElement|null>(null);
const subsidiaryImgSty = "block mx-auto object-contain w-[400px] h-[80px]"
const subsidiaryImgContSty = "min-w-[100vw]"

  const allImageEl:JSX.Element[] = allImages.map((img, index)=>{
    return (
  <div className='min-w-[100vw] min-h-[60vh] p-[10px] flex items-center' key={index}>
     <img src={img} alt="Newspaper Image"  className=' object-fill block h-[100%] w-[100%] '/>
     </div>
     )
  })

          useEffect(()=>{
            let interval:number;
            let animation: gsap.Context;
            if(allNewsRef.current){
              const  windowWidth = window.innerWidth;
              const elementWidth =   allNewsRef.current.scrollWidth
              console.log(elementWidth)
                let currentScroll = 0;
                let nextScrollWidth = currentScroll+windowWidth;
               animation  = gsap.context(()=>{

                interval = setInterval(()=>{
                      gsap.fromTo(".scrollable-containers",{
                        scrollTo: {y:0,x: currentScroll},
                      },
                      {
                        delay:1,
                        duration:0.5,
                        scrollTo: {y:0,x: nextScrollWidth},
                        onComplete:()=>{
                          if(nextScrollWidth<elementWidth){
                           currentScroll+=windowWidth;
                           nextScrollWidth+=windowWidth;
                          }
                          else{
                            currentScroll = 0;
                            nextScrollWidth = windowWidth; 
                          }
                        }
                      })
                    }, 2000);
                    })
                   
            }


            return ()=>{
              clearInterval(interval)
              animation.revert()
            }
          }, [])
  return (
    <div className='w-[100vw] overflow-x-hidden' id='about'>
      <Logo/>
            <div className='w-[100vw] h-[60vh] flex flex-row items-center overflow-scroll scrollable-containers' id='images-container' ref={(ref)=>{
              allNewsRef.current = ref
            }}>
      {allImageEl}
            </div>
      <h1 className='text-white text-2xl font-semibold p-[10px] mt-[20px]'><span className='text-red-500'>
      <Typewriter words={actions}
      loop={0}
      cursor={true}
      cursorBlinking={true}
      typeSpeed={100}
      />
        </span> {" "} Nigeria since 2004</h1>
        <p className='text-white text-left pl-[10px] pr-[5px]'>
        Folio Communications Plc, since 2004 has been at the forefront of enlightening Nigeria through our flagship publication, the Daily Times.
        <br /> <br />As Nigeria’s independent media heritage, established in 1926, the Daily Times continues to be a trusted source of news, information and inspiration for generations. <br /><br />

At Folio Communications, we are not just about newspapers. We possess an array of dynamic business verticals.



</p>
<div id='subsidiaries' className="scrollable-containers flex my-[10px] overflow-x-scroll">
        <div className={subsidiaryImgContSty}>
            <img className={subsidiaryImgSty} src={folioComm} alt="" />
        </div>
        <div className={subsidiaryImgContSty} >
            <img className={subsidiaryImgSty} src={firstOct} alt="" />
        </div>
        <div className={subsidiaryImgContSty} >
            <img className={subsidiaryImgSty} src={heroes} alt="" />
        </div>
        <div className={subsidiaryImgContSty} >
            <img className={subsidiaryImgSty} src={msNg} alt="" />
        </div>

</div>


    </div>
  )
}

export {About}


// Folio Interactive Networks: Connecting you to the digital world with innovative multimedia solutions.
// 1st October Publishing Limited: Celebrating Nigeria’s rich history and vibrant culture through compelling publications.
// Folio Air: In partnership with New Crystal Communications, bringing you cutting-edge broadcasting and media services.
// Join us as we continue to shape the future of media in Nigeria, bridging the gap between the past and the future for the middle-aged, the old, and the young alike.