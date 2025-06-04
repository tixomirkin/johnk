import Image from "next/image";
import bg from "@/public/main_page/5_section/bg.svg"
import NextBtn from "@/components/next_btn";

export default function Section5() {
    return (
        <div className="relative mt-[-35vw] mb-[-38vh] ">
            <Image src={bg} alt="" className="w-full" />
            <NextBtn className="absolute bottom-[45vh] right-[5vw] w-90" to="/childhood">Детство художника</NextBtn>
        </div>
    )
}