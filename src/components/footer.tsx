import Image from "next/image";
import footer_bg from "@/public/footer/bg.svg"
import vk from "@/public/footer/vk.svg"
import tg from "@/public/footer/tg.svg"
import yt from "@/public/footer/youtube.svg"
import logo from "@/public/footer/footer_logo.svg"

export default function Footer() {
    return (
        <div className="relative mt-[-26vw] ">
            <Image src={footer_bg} alt=""/>
            <div className="h-40 bg-[#00188C] pb-50">
                <div className="flex flex-row gap-4 items-end justify-center mb-5">
                    <Image className="intersect:motion-preset-fade motion-delay-500 motion-duration-2000" src={vk} alt=""/>
                    <Image src={yt} alt=""/>
                    <Image src={tg} alt=""/>
                </div>
                <Image src={logo} alt="" className="mx-auto"/>
            </div>
        </div>
    )
}