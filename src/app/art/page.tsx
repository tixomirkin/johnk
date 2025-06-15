import Image from "next/image";
import page_img from "@/public/9_page/page.png"
import Header from "@/components/header";
import Footer from "@/components/footer";
import NextBtn from "@/components/next_btn";

export default function NowPage() {
    return (
        <>
            <Header thisUrl="/art" logoFill="black" toBg="rgba(255, 255, 255, 0.5)"/>
            <div className="relative w-full">
                <Image src={page_img} className="w-full mb-[-16vw]" alt=""/>
                <iframe
                    className="absolute top-[159vw] left-[8vw] w-[56vw] h-[40vw]"
                    src="https://vkvideo.ru/video_ext.php?oid=-225097895&id=456239017&hd=2&hash=d84fdf36ba911e29&autoplay=1"
                    // width="805" height="550"
                    allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameBorder="0"
                    allowFullScreen></iframe>
                <NextBtn className="absolute bottom-[22vw] right-[5vw] w-60" to="/now" isBlack={true}>Наши дни</NextBtn>
            </div>
            <Footer/>
        </>
    )
}