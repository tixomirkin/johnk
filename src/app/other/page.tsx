"use client"

import Image from "next/image";
import page_img from "@/public/7_page/page.png"
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextBtn from "@/components/next_btn";

import el1 from "@/public/7_page/el1.svg";
import el2 from "@/public/7_page/el2.png";
import el3 from "@/public/7_page/el3.png";

import {motion} from "framer-motion";

export default function OtherPage() {
    return (
        <>
            <Header thisUrl="/other" logoFill="black" toBg="rgba(255, 255, 255, 0.5)" />
            <div className="relative w-full">

                <motion.div
                    initial={{translateY: -400, scale: 2, filter: "blur(100px)"}}
                    whileInView={{filter: "blur(0px)", scale: 1, translateY: 0}}
                    className="absolute top-[19vw] w-[22vw] left-[40vw]">
                    <Image src={el1} alt="" className="w-full h-full"/>
                </motion.div>

                <motion.div
                    initial={{translateY: 0, scale: 0.8, filter: "blur(10px)", opacity: 0}}
                    whileInView={{filter: "blur(0px)", scale: 1, translateY: 0, opacity: 1}}
                    viewport={{margin: "0px 0px -30% 0px"}}
                    transition={{duration: 0.8}}
                    className="absolute top-[42vw] w-[97vw] right-[0vw]">
                    <Image src={el2} alt="" className="w-full h-full"/>
                </motion.div>

                <motion.div
                    initial={{translateX: 1000, scale: 1.3, filter: "blur(10px)"}}
                    whileInView={{filter: "blur(0px)", scale: 1, translateX: 0}}
                    transition={{duration: 0.5, delay: 1.0}}
                    viewport={{margin: "0px 0px -30% 0px"}}
                    className="absolute top-[241vw] w-[99vw] right-[0vw]">
                    <Image src={el3} alt="" className="w-full h-full"/>
                </motion.div>

                <NextBtn className="z-40 absolute bottom-[20vw] right-[60vw] w-70" to="/spumco" isBlack={true}>Студия
                    SPUMCO</NextBtn>
                <NextBtn className="z-40 absolute bottom-[16vw] right-[60vw] w-63" to="/ren-stimpy" isBlack={true}>Рен и
                    Стимпи</NextBtn>
                {/*<NextBtn className="z-40 absolute bottom-[12vw] right-[60vw] w-46" to="/critics" isBlack={true}>Критика</NextBtn>*/}
                <Image src={page_img} className="w-full mb-[-23vw]" alt=""/>
            </div>

            <Footer/>
        </>
    )
}