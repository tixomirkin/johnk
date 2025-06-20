"use client"

import Image from "next/image";
import page_img from "@/public/3_page/page.png"
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextBtn from "@/components/next_btn";
import text from "@/public/3_page/text.svg";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import el1 from "@/public/3_page/el1.png";
import el2 from "@/public/3_page/el2.png";
import el3 from "@/public/3_page/el3.png";

export default function PathToSuccessPage() {

    const refEl2 = useRef(null)
    const { scrollYProgress:  scrollEl2} = useScroll({
        target: refEl2,
        offset: ["start start", "start 4.5"]
    })
    const trEl2 = useTransform(scrollEl2, [0, 1], [0, -1000]);
    const scaleEl2 = useTransform(scrollEl2, [0, 1], [1, 1.5]);
    const bloorEl2 = useTransform(scrollEl2, [0, 1], [0, 10]);
    const blurFilterEl2 = useTransform(bloorEl2, value => `blur(${value}px)`)

    const refEl3 = useRef(null)
    const { scrollYProgress:  scrollEl3} = useScroll({
        target: refEl3,
        offset: ["start start", "start 4.5"]
    })
    const trEl3 = useTransform(scrollEl3, [0, 1], [0, 1000]);
    const scaleEl3 = useTransform(scrollEl3, [0, 1], [1, 1.5]);
    const bloorEl3 = useTransform(scrollEl3, [0, 1], [0, 10]);
    const blurFilterEl3 = useTransform(bloorEl3, value => `blur(${value}px)`)

    return (
        <>
            <Header thisUrl="/path-to-success" logoFill="yellow"/>
            <div className="relative w-full">
                <Image src={page_img} className="w-full mb-[-100vw] pointer-events-none select-none" alt=""/>
                <NextBtn className="absolute bottom-[115vw] right-[10vw]" to="/childhood">История мультфильма</NextBtn>
                <NextBtn className="absolute bottom-[110vw] right-[10vw]" to="/spumco">Студия SPUMCO</NextBtn>
                <NextBtn className="absolute bottom-[105vw] right-[10vw]" to="/style">Уникальный стиль автора</NextBtn>
            </div>

            <motion.div
                initial={{translateY: -400, scale: 1, filter: "blur(100px)"}}
                whileInView={{filter: "blur(0px)", scale: 1, translateY: 0}}
                className="absolute top-[24vw] w-[35vw] left-[32vw]">
                <Image src={text} alt="" className="w-full h-full"/>
            </motion.div>

            <motion.div
                initial={{translateY: 400, scale: 1, filter: "blur(100px)"}}
                whileInView={{filter: "blur(0px)", scale: 1, translateY: 0}}
                transition={{duration: 0.6}}
                viewport={{margin: "20% 0px"}}
                className="absolute top-[37vw] w-[99vw] right-[0vw]">
                <Image src={el1} alt="" className="w-full h-full"/>
            </motion.div>

            <motion.div
                ref={refEl2}
                style={{filter: blurFilterEl2, translateX: trEl2, scale: scaleEl2}}
                className="absolute top-[295vw] w-[90vw] left-[5vw]">
                <Image src={el2} alt="" className="w-full h-full"/>
            </motion.div>

            <motion.div
                ref={refEl3}
                style={{filter: blurFilterEl3, translateX: trEl3, scale: scaleEl3}}
                className="absolute top-[350vw] w-[75vw] right-[4vw]">
                <Image src={el3} alt="" className="w-full h-full"/>
            </motion.div>

            <Footer/>
        </>
    )
}