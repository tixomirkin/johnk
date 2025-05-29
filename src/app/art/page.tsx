// import Image from "next/image";
// import page_img from "@/public/10_page/page.svg"
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NowPage() {
    return (
        <>
            <Header thisUrl="/art" />
            {/*<Image src={page_img} className="w-full mb-[-16vw]" alt=""/>*/}
            <Footer/>
        </>
    )
}