import Image from "next/image";
import page_img from "@/public/10_page/page.png"
import gif from "@/public/10_page/unnamed.gif"
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NowPage() {
    return (
        <>
            <Header thisUrl="/now" />
            <Image src={page_img} className="w-full mb-[-16vw]" alt=""/>
            <Image src={gif} className="absolute w-[30vw] top-[375vw] right-[10vw]" alt=""/>
            <Footer/>
        </>
    )
}