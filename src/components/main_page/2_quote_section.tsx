import Image from "next/image";
import bg from "@/public/main_page/2_quote_section/quote_bg.png"
import bg_button from "@/public/main_page/2_quote_section/bg_button.png"
import qu from "@/public/main_page/2_quote_section/quote.png"
import quote_img from "@/public/main_page/2_quote_section/quote_img.png"

import { motion, useScroll, useTransform } from "framer-motion";
import {useRef} from "react";


export default function QuoteSection() {
    // const { scrollY } = useScroll(); // Отслеживаем скролл
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end 1.4"]
    })
    const blurAmount = useTransform(scrollYProgress, [0, 1], [100, 0]); // Масштаб от 1 до 0.7 при скролле 0
    const scale = useTransform(scrollYProgress, [0, 1], [2, 1]); // Масштаб от 1 до 0.7 при скролле 0
    const blurFilter = useTransform(blurAmount, value => `blur(${value}px)`)

    return (
        <div className="relative -translate-y-1/10 z-40">
            <div className="absolute w-full h-full p-20 flex flex-row items-center justify-center ">
                <div className="h-full relative">
                    <motion.div ref={ref} style={{filter: blurFilter, scale}} className=" blur-element relative h-full z-30">
                        <Image className="object-contain h-full" src={qu} alt=""/>
                    </motion.div>

                    <motion.div initial={{ filter: "blur(10px)", scale: 1.5, translateX: 300 }}
                                whileInView={{filter: "blur(0px)", scale: 1, translateX: 0 }}
                                // animate={{ filter: "blur(5px)" }}
                                transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                        className="absolute top-1/2 right-0 w-2/6 z-10">
                        <Image className="object-contain  " src={quote_img} alt=""/>
                    </motion.div>

                </div>

            </div>
            <Image className="object-cover object-top w-full h-[110vh]" src={bg} alt=""/>
            {/*<Image className="object-contain" src={sign} alt=""/>*/}
            <Image className="object-contain absolute bottom-0 translate-y-1/2 w-full z-30" src={bg_button} alt=""/>
            {/*<div className=""></div>*/}
        </div>
    )
}