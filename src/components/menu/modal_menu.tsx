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


const ModalMenu = ({ handleClose, modalOpen, thisUrl } : {handleClose: () => void, modalOpen: boolean, thisUrl: string} ) => {

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
                    {/*<NavItem to="/" thisUrl={thisUrl}>Главная</NavItem>*/}
                    <NavItem to="/childhood" thisUrl={thisUrl}>Детство</NavItem>
                    <NavItem to="/path-to-success" thisUrl={thisUrl}>Путь к успеху</NavItem>
                    <NavItem to="/ren-stimpy" thisUrl={thisUrl}>Рен и Стимпи</NavItem>
                    <NavItem to="/style" thisUrl={thisUrl}>Уникальный стиль</NavItem>
                    <NavItem to="/spumco" thisUrl={thisUrl}>SPUMCO</NavItem>
                    <NavItem to="/other" thisUrl={thisUrl}>Другие проекты</NavItem>
                    {/*<NavItem to="/critics" thisUrl={thisUrl}>Критика</NavItem>*/}
                    <NavItem to="/art" thisUrl={thisUrl}>След в искусстве</NavItem>
                    <NavItem to="/now" thisUrl={thisUrl}>Наши дни</NavItem>
                </div>

            </motion.div>
        </Backdrop>
    );
};


export default ModalMenu;