import Image from "next/image";
import bg from "@/public/main_page/4_section/bg.png"

export default function Section4() {
    return (
        <div className="relative mt-[-30vw] z-0">
            <Image src={bg} alt="" className="w-full" />
        </div>
    )
}