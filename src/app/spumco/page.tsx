import Image from "next/image";
import page_img from "@/public/6_page/page.png"
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextBtn from "@/components/next_btn";



export default function SpumcoPage() {
    return (
        <>
            <Header logoFill="black" thisUrl="/spumco" toBg="rgba(255, 255, 255, 0.5)"/>
            <div className="relative w-full">
                <Image src={page_img} className="w-full mb-[-17vw]" alt=""/>
                <NextBtn className="absolute bottom-[34vw] right-[5vw] w-100 text-[#EDE20F]" to="/art">Современное
                    искусство</NextBtn>
                <NextBtn className="absolute bottom-[30vw] right-[5vw] w-65 text-[#EDE20F]" to="/ren-stimpy">Рен и
                    Стимпи</NextBtn>
                <NextBtn className="absolute bottom-[26vw] right-[5vw] w-49 text-[#EDE20F]"
                         to="/critics">Критика</NextBtn>
            </div>
            <Footer/>
        </>
    )
}