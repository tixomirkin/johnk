"use client"

import Image from "next/image";
import bg from "@/public/main_page/3_section/bg.png"
import tiket from "@/public/main_page/3_section/tiket.png"
import sign from "@/public/main_page/3_section/sign.png"

import { motion, useScroll, useTransform } from "framer-motion";
import {useRef} from "react";


export default function Section3() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    })

    const rotate = useTransform(
        scrollYProgress,
        [0, 1],
        [9, 0]
    );

    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1.5, 1.4]
    );

    return (
        <>
            <div className="relative  ">
                <motion.div
                    initial={{opacity: 0, scale: 2, rotate: 10}}
                    transition={{duration: 0.5, delay: 0.5}}
                    whileInView={{opacity: 1, scale: 1, rotate: 0}}
                    viewport={{ once: true }}
                    className="object-contain absolute -top-6 right-0 w-[42vw] z-60">
                    <Image src={sign} alt="" className=" w-full h-full" />
                </motion.div>
                <Image className="object-cover w-full mt-[-13vh]" src={bg} alt=""/>
                <motion.div
                    ref={ref}
                    style={{rotate, scale}}
                    className="absolute object-cover z-20  left-1/2   -translate-x-1/2  rotate-2  top-[46vw] ">
                    <Image className="w-[80vw] " src={tiket} alt=""/>
                </motion.div>


                {/*<div className="absolute top-[30vw] left-10 text-xl w-[70vw]">*/}
                {/*    Джон Крисфалуси - выдающийся художник, запомнившийся своей <br/>*/}
                {/*    эксцентричной анимацией и сумасшедшими сюжетами. <br/>*/}
                {/*    Яркие, карикатурные образы героев мультфильмов, оживших в <br/>*/}
                {/*    совершенно необыкновенных мирах, характер которых, <br/>*/}
                {/*    напрямую связан с характером автора.*/}
                {/*</div>*/}

                {/*<div className="absolute top-[113vw] left-30 text-xl w-[70vw]">*/}
                {/*    Но более всего аниматор отличился своим мультсериалом <br/>*/}
                {/*    Рен и Стимпи, покорившим серда миллионов любителей<br/>*/}
                {/*    деконтруированных образов и юмора. Сейчас сериал<br/>*/}
                {/*    обрёл культовый статус.*/}
                {/*</div>*/}


            </div>

            {/*<div className="relative mb-40">*/}
            {/*    <Image className="object-cover w-[40vw] absolute top-[-13vh] right-0" src={sign} alt=""/>*/}
            {/*    <div className="pl-20 pr-40 text-xl pt-[30vh]">*/}
            {/*        Джон Крисфалуси - выдающийся художник, запомнившийся своей <br/>*/}
            {/*        эксцентричной анимацией и сумасшедшими сюжетами. <br/>*/}
            {/*        Яркие, карикатурные образы героев мультфильмов, оживших в <br/>*/}
        {/*        совершенно необыкновенных мирах, характер которых, <br/>*/}
        {/*        напрямую связан с характером автора.*/}
        {/*    </div>*/}

        {/*    /!*<Image className="object-cover w-full " src={img} alt=""/>*!/*/}
        {/*</div>*/}

        {/*<div className="h-[200vh] relative">*/}
        {/*    <div className="absolute z-50 -left-1/2 top-0 min-h-[200vh] px-[100vw] min-w-[200wh] bg-[#402D14] -rotate-6">*/}

        {/*    </div>*/}
        {/*</div>*/}
        </>
    )
}