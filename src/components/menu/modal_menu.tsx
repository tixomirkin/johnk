"use client"

import {motion, Variants} from "framer-motion";
import Backdrop from "@/components/menu/backdrop";
import NavItem from "@/components/menu/nav_item";
import useLockScroll from "@/utils/useLockScroll";

const blurAnim: Variants = {
    hidden: {
        opacity: 0,
        filter: "blur(100px)",
        scale: 0.8,
    },
    visible: {
        opacity: 1.0,
        filter: "blur(0px)",
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.0,
            type: "tween",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        opacity: 0,
        filter: "blur(100px)",
        scale: 0.5,
        // y: "100vh",
        // opacity: 0,
    },
};


const ModalMenu = ({ handleClose, modalOpen } : {handleClose: () => void, modalOpen: boolean} ) => {

    useLockScroll(modalOpen);

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className=""
                variants={blurAnim}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div
                    className=" flex-col justify-center items-start">
                    <NavItem to="/" isActive={true}>Главная</NavItem>
                    <NavItem to="/" isActive={false}>История</NavItem>
                    <NavItem to="/" isActive={false}>Путь</NavItem>
                    <NavItem to="/" isActive={false}>SPUMCO</NavItem>
                    <NavItem to="/" isActive={false}>Стиль</NavItem>
                    <NavItem to="/" isActive={false}>Рен и Стимпи</NavItem>
                    <NavItem to="/" isActive={false}>Проекты</NavItem>
                    <NavItem to="/" isActive={false}>Критика</NavItem>
                    <NavItem to="/" isActive={false}>Искусство</NavItem>
                    <NavItem to="/" isActive={false}>Наши дни</NavItem>
                    <button onClick={handleClose}>Close</button>
                </div>

            </motion.div>
        </Backdrop>
    );
};


export default ModalMenu;