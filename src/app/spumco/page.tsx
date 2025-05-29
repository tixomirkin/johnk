import Image from "next/image";
import page_img from "@/public/6_page/page.png"
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function SpumcoPage() {
    return (
        <>
            <Header thisUrl="/spumco" />
            <Image src={page_img} className="w-full mb-[-16vw]" alt=""/>
            <Footer/>
        </>
    )
}