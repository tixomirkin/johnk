import Image from "next/image";
import bg from "@/public/main_page/4_section/bg.svg"

export default function Section4() {
    return (
        <div className="relative mt-[-25vw]">
            <Image src={bg} alt="" className="w-full" />
        </div>
    )
}