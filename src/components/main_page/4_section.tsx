import Image from "next/image";
import bg from "@/public/main_page/4_section/bg.png"
import {useScroll} from "framer-motion";
import { motion, useTransform } from "framer-motion";
import {useRef} from "react";

export default function Section4() {
    const refBg = useRef(null)

    const { scrollYProgress: scrollYProgressBg } = useScroll({
        target: refBg,
        offset: ["start end", "start start"],
    })

    const blurAmount = useTransform(scrollYProgressBg, [0, 1], [5, 0]); // Масштаб от 1 до 0.7 при скролле 0
    // const translateY = useTransform(scrollYProgressBg, [0, 1], [50, 0]); // Масштаб от 1 до 0.7 при скролле 0
    const scale = useTransform(scrollYProgressBg, [0, 1], [1.5, 1]); // Масштаб от 1 до 0.7 при скролле 0
    const blurFilter = useTransform(blurAmount, value => `blur(${value}px)`)


    return (
        <motion.div ref={refBg} style={{filter: blurFilter, scale}} className="relative mt-[-30vw] z-0">
            <Image src={bg} alt="" className="w-full" />
        </motion.div>
    )
}