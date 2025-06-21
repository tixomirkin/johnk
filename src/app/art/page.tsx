"use client"

import Image from "next/image";
import page_img from "@/public/9_page/page.png"
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextBtn from "@/components/next_btn";
import text from "@/public/9_page/text.svg";
import el2 from "@/public/9_page/el2.png";
import el3 from "@/public/9_page/el3.png";
import el4 from "@/public/9_page/el4.png";
import el5 from "@/public/9_page/el5.png";
import {motion} from "framer-motion";

export default function NowPage() {
    return (
        <>
            <Header thisUrl="/art" logoFill="black" toBg="rgba(255, 255, 255, 0.5)"/>
            <div className="relative w-full">
                <Image src={page_img} className="w-full mb-[-16vw]" alt=""/>

                <motion.div
                    initial={{translateY: -400, scale: 2, filter: "blur(100px)"}}
                    whileInView={{filter: "blur(0px)", scale: 1, translateY: 0}}
                    className="absolute top-[23vw] w-[22vw] left-[40vw]">
                    <Image src={text} alt="" className="w-full h-full"/>
                </motion.div>

                <motion.div
                    initial={{translateY: 0, scale: 0.8, filter: "blur(10px)", opacity: 0, rotate: 30.0}}
                    whileInView={{filter: "blur(0px)", scale: 1, translateY: 0, opacity: 1, rotate: 0}}
                    viewport={{margin: "0px 0px -30% 0px"}}
                    transition={{duration: 0.8, delay: 0.5}}
                    className="absolute top-[65vw] w-[90vw] right-[0vw]">
                    <Image src={el2} alt="" className="w-full h-full"/>
                </motion.div>

                <motion.div
                    initial={{translateY: 0, scale: 0.5, filter: "blur(10px)", opacity: 0, rotate: 30.0}}
                    whileInView={{filter: "blur(0px)", scale: 1, translateY: 0, opacity: 1, rotate: 0}}
                    // viewport={{margin: "0px 0px -30% 0px"}}
                    transition={{duration: 0.8, delay: 0.5}}
                    className="absolute top-[200vw] w-[100vw] right-[0vw]">
                    <Image src={el3} alt="" className="w-full h-full"/>
                </motion.div>

                <motion.div
                    initial={{translateY: 0, scale: 0.5, filter: "blur(10px)", opacity: 0, rotate: -30.0}}
                    whileInView={{filter: "blur(0px)", scale: 1, translateY: 0, opacity: 1, rotate: 0}}
                    // viewport={{margin: "0px 0px -30% 0px"}}
                    transition={{duration: 0.8, delay: 0.5}}
                    className="absolute top-[240vw] w-[90vw] right-[0vw]">
                    <Image src={el4} alt="" className="w-full h-full"/>
                </motion.div>

                <motion.div
                    initial={{translateY: 0, scale: 0.5, filter: "blur(10px)", opacity: 0, rotate: -30.0}}
                    whileInView={{filter: "blur(0px)", scale: 1, translateY: 0, opacity: 1, rotate: 0}}
                    // viewport={{margin: "0px 0px -30% 0px"}}
                    transition={{duration: 0.8}}
                    className="absolute top-[370vw] w-[90vw] right-[5vw]">
                    <Image src={el5} alt="" className="w-full h-full"/>
                </motion.div>

                <iframe
                    className="absolute top-[159vw] left-[8vw] w-[56vw] h-[40vw]"
                    src="https://vkvideo.ru/video_ext.php?oid=-225097895&id=456239017&hd=2&hash=d84fdf36ba911e29&autoplay=1"
                    // width="805" height="550"
                    allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0"
                    allowFullScreen></iframe>
                <NextBtn className="absolute bottom-[22vw] right-[5vw] w-60" to="/now" isBlack={true}>Наши дни</NextBtn>
            </div>
            <Footer/>
        </>
    )
}