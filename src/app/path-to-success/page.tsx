import Image from "next/image";
import page_img from "@/public/3_page/page.svg"
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextBtn from "@/components/next_btn";

export default function PathToSuccessPage() {
    return (
        <>
            <Header thisUrl="/path-to-success" />
            <div className="relative w-full">
                <Image src={page_img} className="w-full mb-[-16vw] pointer-events-none select-none" alt=""/>
                <NextBtn className="absolute bottom-[35vw] right-[10vw]" to="/childhood">История мультфильма</NextBtn>
                <NextBtn className="absolute bottom-[30vw] right-[10vw]" to="/spumco">Студия SPUMCO</NextBtn>
                <NextBtn className="absolute bottom-[25vw] right-[10vw]" to="/style">Уникальный стиль автора</NextBtn>
            </div>
            <Footer/>
        </>
    )
}