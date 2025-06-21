"use client"

import Image from "next/image";
import page_img from "@/public/2_page/page.png"
import el2 from "@/public/2_page/el2.png"
import el3 from "@/public/2_page/el3.png"
import text from "@/public/2_page/text.png"
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextBtn from "@/components/next_btn";
import { motion, useScroll, useTransform } from "framer-motion";
import {useRef} from "react";


export default function Childhood() {

    const refEl2 = useRef(null)
    const { scrollYProgress:  scrollEl2} = useScroll({
        target: refEl2,
        offset: ["start start", "start 2.5"]
    })
    const scaleEl2 = useTransform(scrollEl2, [0, 1], [1, 1.5]);
    const bloorEl2 = useTransform(scrollEl2, [0, 1], [0, 10]);
    const blurFilterEl2 = useTransform(bloorEl2, value => `blur(${value}px)`)

    const refEl3 = useRef(null)
    const { scrollYProgress:  scrollEl3} = useScroll({
        target: refEl3,
        offset: ["start start", "start 2.5"]
    })
    const scaleEl3 = useTransform(scrollEl3, [0, 1], [1, 1.5]);
    const trEl3 = useTransform(scrollEl3, [0, 1], [1, 400]);
    const bloorEl3 = useTransform(scrollEl3, [0, 1], [0, 10]);
    const blurFilterEl3 = useTransform(bloorEl3, value => `blur(${value}px)`)

    return (
        <>
            <Header thisUrl="/childhood" logoFill="black" toBg="rgba(255, 255, 255, 0.5)"/>
            <div className="relative w-full mb-[-114vw]">
                <Image src={page_img} className="w-full mb-[-16vw]" alt=""/>

                <motion.div
                    initial={{translateY: -500, scale: 1, filter: "blur(100px)"}}
                    whileInView={{filter: "blur(0px)", scale: 1, translateY: 0 }}
                    className="absolute top-[22vw] w-[30vw] left-[35vw]">
                    <Image src={text} alt="" className="w-full h-full" />
                </motion.div>

                <motion.div
                    ref={refEl2}
                    style={{scale: scaleEl2, filter: blurFilterEl2}}
                    className="absolute top-[68vw] w-[100vw] left-[0vw]">
                    <Image src={el2} alt="" className="w-full h-full" />
                </motion.div>

                <motion.div
                    ref={refEl3}
                    style={{scale: scaleEl3, filter: blurFilterEl3, translateY: trEl3}}
                    className="absolute top-[168vw] w-[100vw] left-[0vw]">
                    <Image src={el3} alt="" className="w-full h-full" />
                </motion.div>



                <NextBtn className="absolute text-white bottom-[120vw] right-[10vw] w-70" to="/path-to-success">Путь к успеху</NextBtn>
            </div>
            <Footer/>
        </>
    )
}