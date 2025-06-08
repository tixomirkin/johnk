import Image from "next/image";
import page_img from "@/public/2_page/page.png"
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextBtn from "@/components/next_btn";

export default function Childhood() {
    return (
        <>
            <Header thisUrl="/childhood" logoFill="black"/>
            <div className="relative w-full">
                <Image src={page_img} className="w-full mb-[-16vw]" alt=""/>
                <NextBtn className="absolute bottom-[25vw] right-[10vw] w-70" to="/path-to-success">Путь к успеху</NextBtn>
            </div>
            <Footer/>
        </>
    )
}