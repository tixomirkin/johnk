import Image from "next/image";
import page_img from "@/public/5_page/page.png"
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RenStimpyPage() {
    return (
        <>
            <Header thisUrl="/style" />
            <Image src={page_img} className="w-full mb-[-10vw]" alt=""/>
            <Footer/>
        </>
    )
}