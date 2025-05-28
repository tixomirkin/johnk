import Image from "next/image";
import page_img from "@/public/2_page/page.svg"
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Childhood() {
    return (
        <>
            <Header/>
            <Image src={page_img} className="w-full" alt=""/>
            <Footer/>
        </>
    )
}