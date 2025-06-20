"use client"

import Image from "next/image";
import page_img from "@/public/4_page/page.png"
import Header from "@/components/header";
import Footer from "@/components/footer";

import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

import el1 from "@/public/4_page/el1.png";
import el2 from "@/public/4_page/el2.png";
import el3 from "@/public/4_page/el3.png";
import el4 from "@/public/4_page/el4.png";
import el5 from "@/public/4_page/el5.png";
import NextBtn from "@/components/next_btn";

export default function RenStimpyPage() {
    return (
        <>
            <Header thisUrl="/ren-stimpy"/>
            <Image src={page_img} className="w-full mb-[-16vw]" alt=""/>
            <Footer/>


            <motion.div
                initial={{translateY: -400, scale: 2, filter: "blur(100px)"}}
                whileInView={{filter: "blur(0px)", scale: 1, translateY: 0}}
                transition={{duration: 0.6}}
                className="absolute top-[15vw] w-[35vw] left-[32vw]">
                <Image src={el1} alt="" className="w-full h-full"/>
            </motion.div>

            <motion.div
                initial={{translateX: -2000, scale: 1.5, filter: "blur(10px)", rotate: 30.0}}
                whileInView={{filter: "blur(0px)", scale: 1, translateX: 0, rotate: 0}}
                transition={{duration: 0.7}}
                className="absolute top-[58vw] w-[95vw] left-[0vw]">
                <Image src={el5} alt="" className="w-full h-full"/>
            </motion.div>

            <motion.div
                initial={{translateX: 2000, scale: 2, filter: "blur(100px)", rotate: -30.0}}
                whileInView={{filter: "blur(0px)", scale: 1, translateX: 0, rotate: 0}}
                transition={{duration: 0.6}}
                className="absolute top-[150vw] w-[100vw] left-[0vw]">
                <Image src={el2} alt="" className="w-full h-full"/>
            </motion.div>

            <motion.div
                initial={{translateY: 0, scale: 0.1, filter: "blur(100px)", rotate: -130.0}}
                whileInView={{filter: "blur(0px)", scale: 1, translateY: 0, rotate: 0}}
                transition={{duration: 0.6}}
                className="absolute top-[204vw] w-[96vw] right-[0vw]">
                <Image src={el3} alt="" className="w-full h-full"/>
            </motion.div>

            <motion.div
                initial={{translateY: 0, scale: 2, filter: "blur(100px)", rotate: -130.0}}
                whileInView={{filter: "blur(0px)", scale: 1, translateY: 0, rotate: 0}}
                transition={{duration: 0.6}}
                className="absolute top-[292vw] w-[100vw] right-[0vw]">
                <Image src={el4} alt="" className="w-full h-full"/>
            </motion.div>

            <NextBtn className="absolute top-[394vw] left-[18vw] w-100" to="/art">
                Современное искусство
            </NextBtn>
        </>
    )
}