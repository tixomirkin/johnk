'use client'

import {useState} from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import ModalMenu from "@/components/menu/modal_menu";
import {useWindowSize} from "@/utils/useWindowSize";
import convertRemToPixels from "@/utils/convertRemToPixels";
import Link from "next/link";
import Logo from "@/components/menu/logo";



export default function Header({logoFill = "white", thisUrl = "/"}) {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const { height: screenHeight } = useWindowSize();

    const backgroundColor = useTransform(
        scrollY,
        [screenHeight * 0.8, screenHeight],
        ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"]
    );

    // const fillColor = useTransform(
    //     scrollY,
    //     [screenHeight * 0.8, screenHeight],
    //     [logoFill, "rgba(255, 255, 255, 1)"]
    // );

    const paddingY = useTransform(
        scrollY,
        [screenHeight * 0.8, screenHeight],
        [convertRemToPixels(0.25) * 10, convertRemToPixels(0.25)]
    );

    const paddingX = useTransform(
        scrollY,
        [screenHeight * 0.8, screenHeight],
        [convertRemToPixels(0.25) * 25, convertRemToPixels(0.25) * 10]
    );

    const scale = useTransform(
        scrollY,
        [screenHeight * 0.8, screenHeight],
        [1, 0.6]
    );

    return (
        <motion.header
            style={{ backgroundColor, paddingTop: paddingY, paddingBottom: paddingY, paddingLeft:  paddingX, paddingRight: paddingX }}
            data-active={isOpen}
            className="group fixed w-screen z-50 flex flex-row justify-between items-center px-25 py-10 motion-blur-in-md">

            <motion.div
                style={{scale}}
                className="z-50">
                <Link href="/">
                    {/*<Image className="z-50 fill-amber-50 test" color={"#807401"} style={{fill: "#807401"}} width={100} src={logo} alt=""/>*/}
                    <Logo fill={logoFill} />
                </Link>
            </motion.div>

            <motion.button
                style={{scale}}
                onClick={() => setIsOpen(!isOpen)}
                className="  z-50 h-10 w-10 rounded-lg ">


                <div className="grid justify-items-center gap-1.5 ">
                    <span
                        className="h-1 w-8 rounded-full bg-white transition group-data-[active=true]:rotate-45 group-data-[active=true]:translate-y-2.5"></span>
                    <span
                        className="h-1 w-8 rounded-full bg-white group-data-[active=true]:scale-x-0 transition"></span>
                    <span
                        className="h-1 w-8 rounded-full bg-white group-data-[active=true]:-rotate-45 group-data-[active=true]:-translate-y-2.5"></span>
                </div>


            </motion.button>

            <AnimatePresence>
                {isOpen && <ModalMenu modalOpen={isOpen} thisUrl={thisUrl} handleClose={() => setIsOpen(false)} />}
            </AnimatePresence>
        </motion.header>
    )
}