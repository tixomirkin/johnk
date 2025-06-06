import Image from "next/image";
import bg from "@/public/main_page/5_section/bg.png"
import NextBtn from "@/components/next_btn";

export default function Section5() {
    return (
        <div className="relative mt-[-33vw] mb-[-43vw] ">
            <Image src={bg} alt="" className="w-full" />
            <NextBtn className="absolute top-[50vw] right-[10vw] w-90" to="/childhood">Детство художника</NextBtn>
        </div>
    )
}