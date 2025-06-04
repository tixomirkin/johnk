import Link from "next/link";
import {MoveRight} from "lucide-react";

export default  function NextBtn({children, to, className=""}: {children: React.ReactNode, to: string, className?: string}) {
    return (
        <>
            <Link href={to} className={className}>
                <div className="w-full group/button  py-2 text-white text-2xl transition-all  hover:my-2 hover:bg-white hover:text-black  hover:scale-110 duration-300">
                    <div className="px-5 gap-4 flex items-center justify-center">
                        {children} <MoveRight/>
                    </div>
                </div>
            </Link>
        </>
    )
}