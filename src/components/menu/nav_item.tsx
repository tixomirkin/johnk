import Link from "next/link";
import {ReactNode} from "react";

export default function NavItem({ children, to, isActive }: { children: ReactNode, to: string, isActive: boolean }) {
    return (
        <Link href={to} className="">
            <div data-select={isActive} className="w-60 group/link  py-2 text-white text-2xl transition-all  hover:my-2 hover:bg-white hover:text-black bg-black hover:scale-110 duration-300">
                <div className="px-5 group-data-[select=true]/link:border-l-2 border-b-red-500 ">
                    {children}
                </div>
            </div>
        </Link>
    )
}