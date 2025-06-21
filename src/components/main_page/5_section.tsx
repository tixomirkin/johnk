import Image from "next/image";
import bg from "@/public/main_page/5_section/bg.png"
import NextBtn from "@/components/next_btn";
import {useRef} from "react";
import {useScroll, useTransform, motion} from "framer-motion";

export default function Section5() {
    const refBg = useRef(null)

    const { scrollYProgress: scrollYProgressBg } = useScroll({
        target: refBg,
        offset: ["start end", "start start"],
    })

    // const blurAmount = useTransform(scrollYProgressBg, [0, 1], [5, 0]); // Масштаб от 1 до 0.7 при скролле 0
    const translateY = useTransform(scrollYProgressBg, [0, 1], [-200, 0]); // Масштаб от 1 до 0.7 при скролле 0
    // const scale = useTransform(scrollYProgressBg, [0, 1], [1.5, 1]); // Масштаб от 1 до 0.7 при скролле 0
    // const blurFilter = useTransform(blurAmount, value => `blur(${value}px)`)



    return (
        <motion.div ref={refBg} style={{translateY}} className="relative mt-[-33vw] mb-[-43vw] ">
            <Image src={bg} alt="" className="w-full intersect:motion-preset-slide-up motion-delay-200" />
            <NextBtn className="absolute top-[50vw] right-[10vw] w-90 text-white intersect:motion-preset-slide-up motion-delay-200" to="/childhood">Детство художника</NextBtn>
        </motion.div>
    )
}