import Image from "next/image";
import page_img from "@/public/7_page/page.png"
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextBtn from "@/components/next_btn";

export default function OtherPage() {
    return (
        <>
            <Header thisUrl="/other" logoFill="black" toBg="rgba(255, 255, 255, 0.5)" />
            <div className="relative w-full">
                <NextBtn className="z-40 absolute bottom-[20vw] right-[60vw] w-70" to="/spumco" isBlack={true} >Студия SPUMCO</NextBtn>
                <NextBtn className="z-40 absolute bottom-[16vw] right-[60vw] w-63" to="/ren-stimpy" isBlack={true}>Рен и Стимпи</NextBtn>
                <NextBtn className="z-40 absolute bottom-[12vw] right-[60vw] w-46" to="/critics" isBlack={true}>Критика</NextBtn>
                <Image src={page_img} className="w-full mb-[-23vw]" alt=""/>
            </div>

            <Footer/>
        </>
    )
}