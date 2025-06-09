import Image from "next/image";
import bg from "@/public/main_page/2_quote_section/quote_bg.png"
import bg_button from "@/public/main_page/2_quote_section/bg_button.png"
import qu from "@/public/main_page/2_quote_section/quote.png"
import quote_img from "@/public/main_page/2_quote_section/quote_img.png"

export default function QuoteSection() {
    return (
        <div className="relative -translate-y-1/10 z-40">
            <div className="absolute w-full h-full p-20 flex flex-row items-center justify-center ">
                <div className="h-full relative">
                    <Image className="object-contain relative h-full z-30" src={qu} alt=""/>
                    <Image className="object-contain absolute top-1/2 right-0 w-2/6 z-10 " src={quote_img} alt=""/>
                </div>

            </div>
            <Image className="motion-translate-y-in-[10%] motion-delay-500  motion-preset-bounce -motion-translate-y-in-150
            object-cover object-top w-full h-[110vh]" src={bg} alt=""/>
            {/*<Image className="object-contain" src={sign} alt=""/>*/}
            <Image className="object-contain absolute bottom-0 translate-y-1/2 w-full z-30" src={bg_button} alt=""/>
            {/*<div className=""></div>*/}
        </div>
    )
}