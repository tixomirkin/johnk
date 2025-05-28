import { motion } from "framer-motion";
import {ReactNode} from "react";

const Backdrop = ({ children, onClick } : {children: ReactNode, onClick: () => void}) => {

    return (
        <motion.div
            onClick={onClick}
            className="fixed top-0 left-0 h-screen w-screen z-40 flex justify-center items-center bg-black "
            initial={{ opacity: 0, filter: "blur(100px)" }}
            animate={{ opacity: 1.0, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(100px)" }}
        >
            {children}
        </motion.div>
    );
};

export default Backdrop;