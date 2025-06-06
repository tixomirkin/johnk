"use client"

import main_img from "@/public/main_page/1_main_section/main_img.png"
import logo from "@/public/main_page/1_main_section/logo.svg"
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MainSection() {

    const { scrollY } = useScroll(); // Отслеживаем скролл
    const scale = useTransform(scrollY, [0, 1000], [1, 0.7]); // Масштаб от 1 до 0.7 при скролле 0

    return (
        <>
            <div className="h-[90vh] fixed w-screen -z-10">


                <motion.div
                    style={{scale}}
                    className="flex flex-row justify-center items-end absolute bottom-0 w-full pl-22"
                >
                    <Image className="object-contain w-2/5 pt-20 pb-20
                                      motion-preset-blur-right motion-delay-400" src={logo} alt=""/>
                    <Image className="object-contain w-1/2 max-h-[80vh]
                                       motion-preset-blur-left motion-delay-400" src={main_img} alt=""/>
                </motion.div>

                {/*<Image src={main_bg} alt="" className=" absolute -top-0 left-0 bg-center h-screen  -z-30"/>*/}
                <div
                    // style={{backgroundImage: `url('../../../public/main_page/1_main_section/main_bg.svg')`}}
                    className={` bg-cover absolute top-0 bg-center h-screen w-screen -z-30 main-bg-img`}>

                </div>

            </div>
            <div className="h-screen">

            </div>
        </>

    )
}

// /* 1. Главная */

// box-sizing: border-box;
//
// position: relative;
// width: 1470px;
// height: 7894px;
//
//
// border: 1px solid #000000;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

