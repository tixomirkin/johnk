import Image from "next/image";
import page_img from "@/public/3_page/page.png"
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PathToSuccessPage() {
    return (
        <>
            <Header thisUrl="/path-to-success" />
            <Image src={page_img} className="w-full mb-[-16vw]" alt=""/>
            <Footer/>
        </>
    )
}