import Image from "next/image";
import page_img from "@/public/6_page/page.png"
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextBtn from "@/components/next_btn";

export default function SpumcoPage() {
    return (
        <>
            <Header logoFill="black" thisUrl="/spumco" />
            <div className="relative w-full">
                <Image src={page_img} className="w-full mb-[-17vw]" alt=""/>
                <NextBtn className="absolute bottom-[34vw] right-[5vw] w-100" to="/path-to-success">Современное искусство</NextBtn>
                <NextBtn className="absolute bottom-[30vw] right-[5vw] w-65" to="/path-to-success">Рен и Стимпи</NextBtn>
                <NextBtn className="absolute bottom-[26vw] right-[5vw] w-49" to="/path-to-success">Критика</NextBtn>
            </div>
            <Footer/>
        </>
    )
}