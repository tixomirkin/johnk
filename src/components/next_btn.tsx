import Link from "next/link";
import {MoveRight} from "lucide-react";

export default  function NextBtn({children, to, className="", isBlack=false}: {children: React.ReactNode, to: string, className?: string, isBlack?: boolean}) {
    return (
        <>
            <Link href={to} className={className}>
                <div
                    data-is-black={isBlack}
                    className="w-full group/button  py-2 text-white text-2xl transition-all  hover:my-2 hover:bg-white hover:text-black  hover:scale-110 duration-300
                    data-[is-black=true]:text-black data-[is-black=true]:hover:bg-black data-[is-black=true]:hover:text-white">
                    <div className="px-5 gap-4 flex items-center justify-center ">
                        {children} <MoveRight/>
                    </div>
                </div>
            </Link>
        </>
    )
}