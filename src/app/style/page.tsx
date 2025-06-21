"use client"

import Image from "next/image";
import page_img from "@/public/5_page/page.svg"
import Header from "@/components/header";
import Footer from "@/components/footer";
import {motion} from "framer-motion";
import text from "@/public/5_page/text.svg";
import el2 from "@/public/5_page/el2.png";
import el3 from "@/public/5_page/el3.png";
import el4 from "@/public/5_page/el4.png";
import NextBtn from "@/components/next_btn";

export default function RenStimpyPage() {
    return (
        <>
            <Header thisUrl="/style"/>
            <Image src={page_img} className="w-full mb-[-125vw]" alt=""/>

            <motion.div
                initial={{translateY: -400, scale: 1, filter: "blur(100px)"}}
                whileInView={{filter: "blur(0px)", scale: 1, translateY: 0}}
                className="absolute top-[24vw] w-[35vw] left-[32vw]">
                <Image src={text} alt="" className="w-full h-full"/>
            </motion.div>

            <motion.div
                initial={{translateY: 1000, scale: 1.5, filter: "blur(10px)", rotate: 30.0, opacity: 0}}
                whileInView={{filter: "blur(0px)", scale: 1, translateY: 0, rotate: 0, opacity: 1}}
                transition={{duration: 1}}
                viewport={{margin: "-20% 0px"}}
                className="absolute top-[51vw] w-[100vw] left-[0vw] z-20">
                <Image src={el2} alt="" className="w-full h-full"/>
            </motion.div>

            <motion.div
                initial={{translateY: 1000, scale: 1.8, filter: "blur(10px)", rotate: -50.0, opacity: 0}}
                whileInView={{filter: "blur(0px)", scale: 1, translateY: 0, rotate: 0, opacity: 1}}
                transition={{duration: 1, delay: 1}}
                // viewport={{margin: "40% 0px"}}
                className="absolute top-[138vw] w-[100vw] left-[0vw] z-10">
                <Image src={el3} alt="" className="w-full h-full"/>
            </motion.div>

            <motion.div
                initial={{translateY: 1000, scale: 1.8, filter: "blur(10px)", rotate: -50.0, opacity: 0}}
                whileInView={{filter: "blur(0px)", scale: 1, translateY: 0, rotate: 0, opacity: 1}}
                transition={{duration: 1, delay: 0.5}}
                viewport={{margin: "0px 0px -70% 0px"}}
                className="absolute top-[209vw] w-[100vw] left-[0vw] z-0">
                <Image src={el4} alt="" className="w-full h-full"/>
            </motion.div>

            <NextBtn className="absolute top-[345vw] right-[5vw] w-100" to="/spumco">
                Студия SPUMCO
            </NextBtn>
            <NextBtn className="absolute top-[348vw] right-[5vw] w-100" to="/other">
                Другие проекты
            </NextBtn>

            <Footer/>
        </>
    )
}