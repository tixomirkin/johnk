import Image from "next/image";
import bg from "@/public/main_page/5_section/bg.svg"

export default function Section5() {
    return (
        <div className="relative mt-[-35vw] ">
            <Image src={bg} alt="" className="w-full" />
        </div>
    )
}