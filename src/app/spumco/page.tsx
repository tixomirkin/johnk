"use client"

import Image from "next/image";
import page_img from "@/public/6_page/page.png"
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextBtn from "@/components/next_btn";

import el1 from "@/public/6_page/el1.png";
import el2 from "@/public/6_page/el2.png";
import el3 from "@/public/6_page/el3.png";
import el4 from "@/public/6_page/el4.png";
import {motion} from "framer-motion";

export default function SpumcoPage() {
    return (
        <>
            <Header logoFill="black" thisUrl="/spumco" toBg="rgba(255, 255, 255, 0.5)"/>
            <div className="relative w-full">

                <motion.div
                    initial={{translateY: -400, scale: 1, filter: "blur(100px)"}}
                    whileInView={{filter: "blur(0px)", scale: 1, translateY: 0}}
                    className="absolute top-[18vw] w-[35vw] left-[32vw]">
                    <Image src={el1} alt="" className="w-full h-full"/>
                </motion.div>

                <motion.div
                    initial={{translateX: 0, scale: 0.1, filter: "blur(10px)"}}
                    whileInView={{filter: "blur(0px)", scale: 1, translateX: 0}}
                    transition={{duration: 0.5}}
                    className="absolute top-[67vw] w-[90vw] right-[3vw]">
                    <Image src={el2} alt="" className="w-full h-full"/>
                </motion.div>

                <motion.div
                    initial={{translateY: -0, scale: 0.1, filter: "blur(100px)"}}
                    whileInView={{filter: "blur(0px)", scale: 1, translateY: 0}}
                    transition={{duration: 0.5}}
                    className="absolute top-[156vw] w-[94vw] right-[0vw]">
                    <Image src={el3} alt="" className="w-full h-full"/>
                </motion.div>

                <motion.div
                    initial={{translateX: 1400, scale: 1, filter: "blur(10px)", rotate: 30.0}}
                    whileInView={{filter: "blur(0px)", scale: 1, translateX: 0, rotate: 0}}
                    transition={{duration: 0.8}}
                    className="absolute top-[310vw] w-[100vw] right-[0vw]">
                    <Image src={el4} alt="" className="w-full h-full"/>
                </motion.div>

                <Image src={page_img} className="w-full mb-[-17vw]" alt=""/>
                <NextBtn className="absolute bottom-[33vw] right-[5vw] w-100 text-[#EDE20F]" to="/art">Современное
                    искусство</NextBtn>
                <NextBtn className="absolute bottom-[30vw] right-[5vw] w-65 text-[#EDE20F]" to="/ren-stimpy">Рен и
                    Стимпи</NextBtn>
                {/*<NextBtn className="absolute bottom-[26vw] right-[5vw] w-49 text-[#EDE20F]"*/}
                {/*         to="/critics">Критика</NextBtn>*/}
            </div>
            <Footer/>
        </>
    )
}